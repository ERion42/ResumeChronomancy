const { Profile } = require('../models');

const resolvers = {
    Query: {
        profiles: async () => {
            return Profile.find();
        },
        profile: async (parent, { profileId }) => {
            return Profile.findOne({ _id: profileId });
        },
    }
};

module.exports = resolvers;