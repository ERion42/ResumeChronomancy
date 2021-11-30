const { AuthenticationError } = require('apollo-server-express');
const { Profile, Skills, Education, Experience, UserInfo, TechnicalSkill, Language, SoftSkill, Interest } = require('../models');
// const SoftSkills = require('../models/SoftSkill');
const { signToken } = require('../utils/auth');

const resolvers = {

    Skills: {
        technicalSkills: async (technicalSkill) => {
            return (await technicalSkill.populate('technicalSkills').execPopulate()).technicalSkill
        },

        languages: async (language) => {
            return (await language.populate('languages').execPopulate()).language
        },

        softSkills: async (softSkill) => {
            return (await softSkill.populate('softSkills').execPopulate()).softSkill
        },

        interests: async (interest) => {
            return (await interest.populate('interests').execPopulate()).interest
        },
    },

    Query: {
        profiles: async () => {
            const users = await Profile.find().populate([{ path: 'skills', model: Skills }, { path: 'educations', model: Education }, { path: 'experiences', model: Experience }, { path: 'userInfos', model: UserInfo }]);
            return users;
        },
        profile: async (parent, { profileId }, context) => {
            if (context) {
                const profile = await Profile.findById(context._id).populate(
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
            return await Skills.find()
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

        addTechnicalSkill: async (parent, { technicalSkill, owner }, context) => {
            if(context) {
                const technicalSkill = await TechnicalSkill.create(
                    {
                        technicalSkill,
                        owner
                    }
                );

                await Profile.findByIdAndUpdate(
                    { _id: technicalSkill.owner },
                    { $addToSet: { skills: skills._id } }
                );

                return updatedProfile;

            }
        },

        addLanguage: async (parent, { language, owner }, context) => {
            if(context) {
                const language = await Language.create(
                    {
                        language,
                        owner
                    }
                );

                await Profile.findByIdAndUpdate(
                    { _id: language.owner },
                    { $addToSet: { skills: skills._id } }
                );

                return updatedProfile;

            }
        },

        addSoftSkill: async (parent, { softSkill, owner }, context) => {
            if(context) {
                const softSkill = await SoftSkill.create(
                    {
                        softSkill,
                        owner
                    }
                );

                await Profile.findByIdAndUpdate(
                    { _id: softSkill.owner },
                    { $addToSet: { skills: skills._id } }
                );

                return updatedProfile;

            }
        },

        addInterest: async (parent, { interest, owner }, context) => {
            if(context) {
                const interest = await Interest.create(
                    {
                        interest,
                        owner
                    }
                );

                await Profile.findByIdAndUpdate(
                    { _id: interest.owner },
                    { $addToSet: { skills: skills._id } }
                );

                return updatedProfile;

            }
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