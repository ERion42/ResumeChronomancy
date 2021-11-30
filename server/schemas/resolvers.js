const { AuthenticationError } = require('apollo-server-express');
const { Profile, Skills, Education, Experience, UserInfo } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        profiles: async () => {
            const users = await Profile.find().populate([{ path: 'skills', model: Skills }, { path: 'educations', model: Education }, { path: 'experiences', model: Experience }, { path: 'userInfos', model: UserInfo }]);
            return users;
        },
        profile: async (parent, { profileId }, context) => {
            if (context) {
                const profile = await Profile.findById(context.profileId).populate(
                    [
                        { path: 'skills', model: Skills }, 
                        { path: 'educations', model: Education }, 
                        { path: 'experiences', model: Experience },
                        { path: 'userInfos', model: UserInfo }
                    ]
                );

                return profile
            }
            throw new AuthenticationError('You need to be logged in.')
        },
        me: async (parent, args, context) => {
            if (context) {
                return await Profile.findOne({ _id: context._id }).populate([{ path: 'skills', model: Skills }, { path: 'educations', model: Education }, { path: 'experiences', model: Experience }, { path: 'userInfos', model: UserInfo }]);
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        skills: async () => {
            return await Skills.find();
        },
        educations: async () => {
            return await Education.find();
        },
        experiences: async () => {
            return await Experience.find();
        },
        userInfos: async () => {
            return await UserInfo.find();
        }
    },
    
    Mutation: {
        addProfile: async (parent, { username, email, password }) => {
            const user = await Profile.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        }, 

        login: async (parent, { username, password }) => {
            const user = await Profile.findOne({ username });

            if (!user) {
                throw new AuthenticationError('No profile with this username found');
            }

            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw new AuthenticationError('Incorrect Password');
            }

            const token = signToken(user);
            return { token, user }
        },

        removeProfile: async (parent, args, context) => {
            if (context.user) {
                return Profile.findOneAndDelete({ _id: context.user._id });
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        addSkill: async (parent, { technicalSkills, languages, softSkills, interests, owner }, context) => {
            if (context) {
                const skill = await Skills.create(
                    {
                       technicalSkills,
                       languages,
                       softSkills,
                       interests,
                       owner 
                    }
                );
                
                await Profile.findByIdAndUpdate(
                    { _id: skill.owner },
                    { $addToSet: { skills: skill._id } }
                );

                return updatedProfile;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        addEducation: async (parent, { school, degree, major, gpa, graduationDate, certifications, owner }, context) => {
            if (context) {
                const education = await Education.create(
                    {
                        school,
                        degree,
                        major,
                        gpa,
                        graduationDate,
                        certifications,
                        owner
                    }
                );
                console.log(education)
                await Profile.findByIdAndUpdate(
                    { _id: education.owner },
                    { $addToSet: { educations: education._id } }
                );

                return education;
            }

            throw new AuthenticationError('You need to be logged in!')
        },

        addExperience: async (parent, { organization, position, startDate, endDate, location, description, owner }, context) => {
            if (context) {
                const experience = await Experience.create(
                    {
                        organization,
                        position,
                        startDate,
                        endDate,
                        location,
                        description,
                        owner
                    }
                );

                await Profile.findOneAndUpdate(
                    { _id: experience.owner },
                    { $addToSet: { experiences: experience._id } }
                );

                return experience;
            }
            throw new AuthenticationError('You need to be logged in!')
        },

        addUserInfos: async (parent, { firstName, lastName, address, phoneNumber, email, owner }, context) => {
            if (context) {
                const userInfo = await UserInfo.create(
                    {
                        firstName, 
                        lastName,
                        address, 
                        phoneNumber,
                        email,
                        owner
                    }
                )

                await Profile.findByIdAndUpdate(
                    { _id: userInfo.owner },
                    { $addToSet: { userInfos: userInfo._id } }
                )

                return userInfo
            }

            throw new AuthenticationError('You must be logged in to do that!')
        },

        removeEducation: async (parent, { educationId }, context) => {
            if (context.user) {
                const education = await Education.findOneAndDelete({
                    _id: context.user._id
                });

                await Profile.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { educations: education._id } }
                );

                return education
            }

            throw new AuthenticationError('You need to be logged in to do that!')
        },

        removeExperience: async (parent, { experienceId }, context) => {
            if (context.user) {
                const experience = await Experience.findOneAndDelete({
                    _id: context.user._id
                });

                await Profile.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { experiences: experience._id } }
                );

                return experience
            }

            throw new AuthenticationError('You need to be logged in to do that!')
        }
    }
};

module.exports = resolvers;