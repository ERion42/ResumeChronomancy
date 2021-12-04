const { gql } = require('apollo-server-express');

const typeDefs = gql`
    scalar Date
    type Profile {
        _id: ID
        username: String 
        email: String
        password: String
        technicalSkills: [String]
        languages: [String]
        softSkills: [String]
        interests: [String]
        educations: [Education]
        experiences: [Experience]
        userInfos: [UserInfo]
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
        educations: [Education]
        experiences: [Experience]
        userInfos: [UserInfo]
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
        addTechnicalSkill(profileId: ID!, technicalSkill: String): Profile
        removeTechnicalSkill(profileId: ID!, technicalSkill: String): Profile
        addLanguage(profileId: ID!, language: String): Profile
        removeLanguage(profileId: ID!, language: String): Profile
        addSoftSkill(profileId: ID!, softSkill: String): Profile
        removeSoftSkill(profileId: ID!, softSkill: String): Profile
        addInterest(profileId: ID!, interest: String): Profile
        removeInterest(profileId: ID!, interest: String): Profile
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