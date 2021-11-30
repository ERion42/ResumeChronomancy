import { gql } from '@apollo/client';

export const QUERY_ALL_PROFILES = gql`
    query allProfiles {
        profiles {
            _id
            username
            email
            password
        }
    }
`;

export const QUERY_SINGLE_PROFILE = gql`
    query singleProfile($profileId: ID!) {
        profile(profileId: $profileId) {
            _id
            username
            email
            password
        }
    }
`;

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            skills {
                technicalSkills
                languages
                softSkills
                interests
            }
            experiences {
                organization
                position
                startDate
                endDate
                location
                description
            }
            educations {
                school
                degree
                major
                gpa
                graduationDate
                certifications
            }
            userInfos {
               firstName
               lastName
               address
               phoneNumber
               email 
            }
        }
    }
`;