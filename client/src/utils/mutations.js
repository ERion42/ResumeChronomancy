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
    mutation addSkill($profileId: ID!) {
        addSkill(profileId: $profileId) {
            token
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
    mutation addEducation($profileId: ID!) {
        addEducation(profileId: $profileId) {
            token
            educations {
                school
                degree
                major
                graduationDate
                certifications
            }
        }
    }
`;

export const ADD_EXPERIENCE = gql`
    mutation addExperience($profileId: ID!) {
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