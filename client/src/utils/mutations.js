import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
    mutation addProfile($username: String!, $email: String!, $password: String!) {
        addProfile(username: $username, email: $email, password: $password) {
            token
            profile {
                _id
                username
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            profile {
                _id
                username
            }
        }
    }
`;

export const ADD_TECHNICAL_SKILL = gql`
    mutation addTechnicalSkill($profileId: ID!, $technicalSkill: String) {
        addTechnicalSkill(profileId: $profileId, technicalSkill: $technicalSkill) {            
            _id
            technicalSkills
        }
    }
`;

export const ADD_LANGUAGE = gql`
    mutation addLanguage($profileId: ID!, $language: String) {
        addLanguage(profileId: $profileId, language: $language) {            
            _id
            languages
        }
    }
`;

export const ADD_SOFT_SKILL = gql`
    mutation addSoftSkill($profileId: ID!, $softSkill: String) {
        addSoftSkill(profileId: $profileId, softSkill: $softSkill) {            
            _id
            softSkills
        }
    }
`;

export const ADD_INTEREST = gql`
    mutation addInterest($profileId: ID!, $interest: String) {
        addInterest(profileId: $profileId, interest: $interest) {            
            _id
            interests
        }
    }
`;

export const ADD_EDUCATION = gql`
    mutation addEducation($school: String!, $degree: String!, $major: String!, $gpa: String, $graduationDate: String!, $certifications: String, $owner: ID!) {
        addEducation(school: $school, degree: $degree, major: $major, gpa: $gpa, graduationDate: $graduationDate, certifications: $certifications, owner: $owner) {
            school
            degree
            major
            gpa
            graduationDate
            certifications
            owner
        }
    }
`;

export const ADD_EXPERIENCE = gql`
    mutation addExperience($organization: String!, $position: String!, $startDate: String!, $endDate: String!, $location: String!, $description: String!, $owner: ID) {
        addExperience(organization: $organization, position: $position, startDate: $startDate, endDate: $endDate, location: $location, description: $description, owner: $owner) {
            organization
            position
            startDate
            endDate
            location
            description
            owner
        }
    }
`;

export const ADD_USER_INFOS = gql`

    mutation addUserInfos($firstName: String!, $lastName: String!, $address: String!, $phoneNumber: String!, $email: String!, $owner: ID) {
        addUserInfos(firstName: $firstName, lastName: $lastName, address: $address, phoneNumber: $phoneNumber, email: $email, owner: $owner) {
            firstName
            lastName
            address
            phoneNumber
            owner
        }
    }
    
`

export const REMOVE_EDUCATION = gql`
    mutation removeEducation($educationId: ID!) {
        removeEducation(educationId: $educationId) {
            educationId
        }
    }
`;

export const REMOVE_EXPERIENCE = gql`
    mutation removeExperience($experienceId: ID!) {
        removeExperience(experienceId: $experienceId) {
           experienceId 
        }
    }
`;
