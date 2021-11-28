const { AuthenticationError } = require('apollo-server-express');
const { Profile, Skills, Education, Experience } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        profiles: async () => {
            const users = await Profile.find().populate([{ path: 'skills', model: Skills }, { path: 'educations', model: Education }, { path: 'experiences', model: Experience }]);
            return users;
        },
        profile: async (parent, { profileId }, context) => {
            if (context.profile) {
                const profile = await Profile.findById(context.profile._id).populate(
                    [
                        { path: 'skills', model: Skills }, 
                        { path: 'educations', model: Education }, 
                        { path: 'experiences', model: Experience }
                    ]
                );

                return profile
            }
            throw new AuthenticationError('You need to be logged in.')
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return await Profile.findOne({ _id: context.user._id }).populate([{ path: 'skills', model: Skills }, { path: 'educations', model: Education }, { path: 'experiences', model: Experience }]);
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
        }
    },
    
    Mutation: {
        addProfile: async (parent, { username, email, password }) => {
            const profile = await Profile.create({ username, email, password });
            const token = signToken(profile);

            return { token, profile };
        }, 

        login: async (parent, { username, password }) => {
            const profile = await Profile.findOne({ username });

            if (!profile) {
                throw new AuthenticationError('No profile with this username found');
            }

            const correctPassword = await profile.isCorrectPassword(password);

            if (!correctPassword) {
                throw new AuthenticationError('Incorrect Password');
            }

            const token = signToken(profile);
            return { token, profile }
        },

        removeProfile: async (parent, args, context) => {
            if (context.user) {
                return Profile.findOneAndDelete({ _id: context.user._id });
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        addSkill: async (parent, { skillData }, context) => {
            if (context.profile) {
                const skill = await Skills.create(
                    {
                        
                    }
                );

                return updatedProfile;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        addEducation: async (parent, { school, degree, major, gpa, graduationDate, certifications }, context) => {
            if (context.user) {
                const education = await Education.create(
                    {
                        school,
                        degree,
                        major,
                        gpa,
                        graduationDate,
                        certifications
                    }
                );

                await Profile.findOneAndUpdate(
                    { _id: context.profile._id },
                    { $addToSet: { educations: education._id } }
                );

                return education;
            }

            throw new AuthenticationError('You need to be logged in!')
        },

        addExperience: async (parent, { organization, position, start_date, end_date, location, description }, context) => {
            if (context.user) {
                const experience = await Experience.create(
                    {
                        organization,
                        position,
                        start_date,
                        end_date,
                        location,
                        description
                    }
                );

                await Profile.findOneAndUpdate(
                    { _id: context.profile._id },
                    { $addToSet: { experiences: experience._id } }
                );

                return experience;
            }
            throw new AuthenticationError('You need to be logged in!')
        }
    }
};

module.exports = resolvers;