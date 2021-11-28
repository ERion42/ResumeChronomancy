const { gql } = require('apollo-server-express');

const typeDefs = gql`
    scalar Date
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
        _id: ID!
        technicalSkills: [String]
        language: [String]
        softSkills: [String]
        interests: [String]
    }
    
    type Experience {
        _id: ID!
        organization: String
        position: String
        startDate: Float
        endDate: Float
        location: String
        description: String
    }

    type Education {
        _id: ID!
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
        skills: [Skills]
        educations: [Education]
        experiences: [Experience]
    }

    input SkillsInput {
        technicalSkills: String
        language: String
        softSkills: String
        interests: String
    }

    input ExperienceInput {
        organization: String
        position: String
        startDate: Float
        endDate: Float
        location: String
        description: String
    }

    input EducationInput {
        school: String
        degree: String
        major: String
        graduationDate: Float
        certifications: [String]
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addProfile(username: String!, email: String!, password: String!): Auth
        removeProfile(profileId: ID!): Profile
        addSkill(skillData: SkillsInput!): Skills
        removeSkill(skillId: ID!): Skills
        addExperience(experienceData: ExperienceInput!): Experience
        addEducation(school: String!, degree: String!, major: String!, gpa: Float, graduationDate: Float, certifications: String): Education
    }
`;

module.exports = typeDefs;