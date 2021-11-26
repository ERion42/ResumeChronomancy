const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Profile {
        _id: ID
        username: String 
        email: String
        password: String
        skills: [Skill]!
        educations: Education
    }

    type Skill {
        _id: ID
        technicalSkills: [String]!
        language: [String]!
        softSkills: [String]
        interests: [String]
    }

    type Education {
        school: String
        degree: String
        major: String
        graduationDate: Float
        certifications: [String]
    }

    type Auth {
        token: ID!
        profile: Profile
    }

    type Query {
        profiles: [Profile]!
        profile(profileId: ID!): Profile
        me: Profile
        skills: [Skill]!
    }

    input SkillInput {
        technicalSkills: String
        language: String
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addProfile(username: String!, email: String!, password: String!): Auth
        removeProfile(profileId: ID!): Profile
        addSkill(profileId: ID, skill: SkillInput!): Profile
        removeSkill(profileId: ID!, skill: String!): Profile
    }
`;

module.exports = typeDefs;