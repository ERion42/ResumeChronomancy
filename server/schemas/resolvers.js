const { AuthenticationError } = require('apollo-server-express');
const { Profile } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        profiles: async () => {
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

        addSkill: async (parent, {profileId, skill}) => {
            return Profile.findOneAndUpdate(
                {_id: profileId},
                {
                    $addToSet: {skills: skill},
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        removeSkill: async (parent, {profileId, skill}) => {
            return Profile.findOneAndUpdate(
                {_id: profileId},
                {$pull: {skills: skill}},
                {new: true}
            )
        }
    }
};

module.exports = resolvers;