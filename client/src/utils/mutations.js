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

export const ADD_SKILL = gql`
    mutation addSkill($skill: SkillInput!) {
        addSkill(skill: $skill) {
            _id
            username
            email
            skills {
                technicalSkills
                language
                softSkills
                interests
            }
        }
    }
`

export const ADD_EDUCATION = gql`
    mutation addEducation($educationData: EducationInput!) {
        addEducation(educationData: $educationData) {
            _id
            username
            email
            educations {
                school
                degree
                major
                graduationDate
            }
        }
    }
`;

export const ADD_EXPERIENCE = gql`
    mutation addExperience($experienceData: ExperienceInput!) {
        addExperience(profileId: $profileId) {
            token
            experiences {
                organization
                position
                startDate
                endDate
                location
                description
            }
        }
    }
`