const { AuthenticationError } = require('apollo-server-express');
const { Profile, Skills } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        profiles: async () => {
            try {
                const users = await Profile.find();
                users.populate('skills')
                return users
            } catch (error) {
                console.error(error)
            }
            return Profile.find();
        },
        profile: async (parent, { profileId }) => {
            return Profile.findOne({ _id: profileId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return Profile.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        skills: async () => {
            return Skills.find();
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
        }
    }
};

module.exports = resolvers;