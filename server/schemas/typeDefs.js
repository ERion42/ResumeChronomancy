const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Profile {
        _id: ID
        username: String 
        email: String
        password: String
        skills: [Skills]
        educations: Education
        experiences: Experience
    }

    type Skills {
        skillId: ID
        technicalSkills: [String]
        language: [String]
        softSkills: [String]
        interests: [String]
    }

    type Education {
        educationId: ID
        school: String
        degree: String
        major: String
        graduationDate: Float
        certifications: [String]
    }

    type Experience {
        experienceId: ID
        organization: String
        position: String
        startDate: Float
        endDate: Float
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
        graduationDate: Float
        certifications: [String]
    }

    input ExperienceInput {
        organization: String
        position: String
        startDate: Float
        endDate: Float
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
`;

module.exports = typeDefs;