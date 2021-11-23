const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Profile {
        _id: ID
        username: String 
        email: String
        password: String
    }

    type Query {
        profiles: [Profile]!
        profile(profileId: ID!): Profile
        me: Profile
    }
`;

module.exports = typeDefs;