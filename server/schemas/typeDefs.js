const { gql } = require('apollo-server-express');
const { typeDefs: scalarTypeDefs } = require('graphql-scalars');
const typeDefs = [
    ...scalarTypeDefs,
    gql`
    type Profile {
        _id: ID!
        username: String 
        email: EmailAddress
        password: String
        skills: [Skills]
        educations: Education
        experiences: Experience
    }

    type Skills {
        skillId: ID!
        technicalSkills: [String]
        language: [String]
        softSkills: [String]
        interests: [String]
    }

    type Education {
        educationId: ID!
        school: String
        degree: String
        major: String
        graduationDate: Date
    }

    type Experience {
        experienceId: ID!
        organization: String
        position: String
        startDate: Date
        endDate: Date
        location: String
        description: String
    }

    type Auth {
        token: ID!
        profile: Profile
    }

    type Query {
        profiles: [Profile]!
        profile(profileId: ID!): Profile
        me: Profile
        skills: [Skills]
        education: [Education]
        experiences: [Experience]
    }

    input SkillsInput {
        technicalSkills: String
        language: String
        softSkills: String
        interests: String
    }

    input EducationInput {
        school: String
        degree: String
        major: String
        graduationDate: Date
    }

    input ExperienceInput {
        organization: String
        position: String
        startDate: Date
        endDate: Date
        location: String
        description: String
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addProfile(username: String!, email: String!, password: String!): Auth
        removeProfile(profileId: ID!): Profile
        addSkill(skillData: SkillsInput!): Skills
        removeSkill(skillId: ID!): Skills
        addEducation(educationData: EducationInput!): Education
        addExperience(experienceData: ExperienceInput!): Experience
    }
`];

module.exports = typeDefs;