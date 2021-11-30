const { gql } = require('apollo-server-express');

const typeDefs = gql`
    scalar Date
    type Profile {
        _id: ID
        username: String 
        email: String
        password: String
        skills: [Skills]
        educations: [Education]
        experiences: [Experience]
        userInfos: [UserInfo]
    }

    type Skills {
        _id: ID!
        technicalSkills: String
        languages: String
        softSkills: String
        interests: String
        owner: ID
    }
    
    type Experience {
        _id: ID!
        organization: String
        position: String
        startDate: String
        endDate: String
        location: String
        description: String
        owner: ID
    }

    type Education {
        _id: ID!
        school: String
        degree: String
        major: String
        gpa: String
        graduationDate: String
        certifications: [String]
        owner: ID
    }

    type UserInfo {
        firstName: String!
        lastName: String!
        address: String!
        phoneNumber: String!
        email: String!
        owner: ID
    }

    type Auth {
        token: ID!
        profile: Profile
    }

    type Query {
        profiles: [Profile]!
        profile(profileId: ID!): Profile
        me(profileId: ID!): Profile
        skills: [Skills]
        educations: [Education]
        experiences: [Experience]
        userInfos: [UserInfo]
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
        startDate: String
        endDate: String
        location: String
        description: String
    }

    input EducationInput {
        school: String
        degree: String
        major: String
        graduationDate: String
        certifications: [String]
    }

    input UserInfoInput {
        firstName: String
        lastName: String
        address: String
        phoneNumber: String
        email: String
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addProfile(username: String!, email: String!, password: String!): Auth
        removeProfile(profileId: ID!): Profile
        addSkills(technicalSkills: String, languages: String, softSkills: String, interests: String, owner: ID): Skills
        removeSkills(skillId: ID!): Skills
        addExperience(organization: String, position: String, startDate: String, endDate: String, location: String, description: String, owner: ID): Experience
        removeExperience(experienceId: ID!): Experience
        addEducation(school: String, degree: String, major: String, gpa: String, graduationDate: String, certifications: String, owner: ID): Education
        removeEducation(educationId: ID!): Education
        addUserInfos(firstName: String!, lastName: String!, address: String!, phoneNumber: String!, email: String!, owner: ID): UserInfo
        removeUserInfos(userInfosID: ID!): UserInfo
    }
`;

module.exports = typeDefs;


// addEducation(educationData: EducationInput!): Profile