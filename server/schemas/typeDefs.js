const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Profile {
        _id: ID
        username: String 
        email: String
        password: String
    }

    type Auth {
        token: ID!
        profile: Profile
    }

    type Query {
        profiles: [Profile]!
        profile(profileId: ID!): Profile
        me: Profile
    }

    type Mutation {
        addProfile(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth

        removeProfile: Profile
    }
`;

module.exports = typeDefs;