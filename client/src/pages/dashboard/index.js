import React, { useState } from 'react';
import EducationForm from '../../components/forms/EducationForm';
import ExperienceForm from '../../components/forms/ExperiencesForm';
import { useParams, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import SiteContainer from '../../components/siteContainer';
import MyDocument from './Resume/pdfCreate';
import Auth from '../../utils/auth';
import decode from 'jwt-decode'
import { saveEducations, saveExperiences, saveTechnicalSkill, saveLanguage, saveSoftSkill, saveInterest, getSavedEducations, getSavedExperiences, getSavedTechnicalSkills, getSavedLanguage, getSavedSoftSkill, getSavedInterest, getSavedUserInfo } from '../../utils/localstorage';

const educationArray = [];
const experienceArray = [];
const technicalSkillArray = [];
const languageArray = [];
const softSkillsArray = [];
const interestsArray = [];

function Dashboard() {
    
    const token = Auth.loggedIn() ? Auth.getToken() : null;
   
    const decoded = decode(token)
  
    const profileId = useParams();
    const { data } = useQuery(QUERY_ME, {
        variables: { profileId: decoded.data._id }
    })
    

    const profile = data?.me || {}
    console.log(profile)
    const educations = profile.educations;

    const experiences = profile.experiences;
    const technicalSkills = profile.technicalSkills;
    const languages = profile.languages;
    const softSkills = profile.softSkills;
    const interests = profile.interests;
    const userInfos = profile.userInfos;
    console.log(educations);

    const savedEducations = getSavedEducations();
    const savedExperiences = getSavedExperiences();
    const savedTechnicalSkills = getSavedTechnicalSkills();
    const savedLanguages = getSavedLanguage();
    const savedSoftSkills = getSavedSoftSkill();
    const savedInterests = getSavedInterest();
    

    const handleSaveEducation = async (education) => {
        educationArray.push(education)
        saveEducations(educationArray)
    }

    const handleSaveExperience = async (experience) => {
        experienceArray.push(experience)
        saveExperiences(experienceArray)
    }

    const handleSaveTechnicalSkill = async (technicalSkill) => {
        technicalSkillArray.push(technicalSkill);
        saveTechnicalSkill(technicalSkillArray)
    }

    const handleSaveLanguage = async (language) => {
        languageArray.push(language)
        saveLanguage(languageArray)
    }

    const handleSaveSoftSkill = async (softSkill) => {
        softSkillsArray.push(softSkill)
        saveSoftSkill(softSkillsArray)
    }

    const handleSaveInterest = async (interest) => {
        interestsArray.push(interest)
        saveInterest(interestsArray)
    }

    const TechnicalSkillItems = savedTechnicalSkills?.map((technicalSkill) => {
        return (
            <div className="container" data-bs-toggle="tooltip" data-bs-placement="top" title={technicalSkill}>
                <div className="row">
                    <div className="col">
                        <div className="d-flex w-100 justify-content-between mt-1 mb-1">
                            <h6 className="mb-1" key={technicalSkill.id}>{technicalSkill}</h6>
                            {/* <button type="submit" onClick={() => handleSaveTechnicalSkill(technicalSkill)}>Save</button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    const LanguageItems = savedLanguages?.map((language) => {
        return (
            <div className="container" data-bs-toggle="tooltip" data-bs-placement="top" title={language}>
                <div className="row">
            
                    <div className="col">
                        <div className="d-flex w-100 justify-content-between mt-1 mb-1">
                            <h6 className="mb-1">{language}</h6>
                            {/* <button type="submit" onClick={() => handleSaveLanguage(language)}>Save</button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    const SoftSkillItems = savedSoftSkills?.map((softSkill) => {
        return (
            <div className="container" data-bs-toggle="tooltip" data-bs-placement="top" title={softSkill}>
                <div className="row">
                
                    <div className="col">
                        <div className="d-flex w-100 justify-content-between mt-1 mb-1">
                            <h6 className="mb-1">{softSkill}</h6>
                            {/* <button type="submit" onClick={() => handleSaveSoftSkill(softSkill)}>Save</button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    const InterestItems = savedInterests?.map((interest) => {
        return (
            <div className="container" data-bs-toggle="tooltip" data-bs-placement="top" title={interest}>
                <div className="row">
            
                    <div className="col">
                        <div className="d-flex w-100 justify-content-between mt-1 mb-1">
                            <h6 className="mb-1">{interest}</h6>
                            {/* <button type="submit" onClick={() => handleSaveInterest(interest)}>Save</button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    
    // Waiting for forms for Skills and Experience... odds are we're going to have to re-do this one. I feel like we probably need 

    
    return (
        <div className="fluid-container">

            <div className="row">
                {userInfos?.length ? (userInfos.map(userInfo => {
                    return (
                        <div>
                            <h2 className='text-center'>Welcome back, </h2>
                            <h2 className='text-center'>{userInfo.firstName} {userInfo.lastName}</h2>
                        </div>

                        
                    )
                })
                ) : (
                    <h2>Welcome, {profile.username}</h2>
                )}
            </div>
            <div className="row justify-content-center">
                <div className="col-md-3 bg-primary rounded m-1 pb-4 m-2">
                    <h2 className="text-center text-white">Educations:</h2>
                    
                    <ul className="list-group checkbox-list-group">
                        {(savedEducations?.length > 0) ? (savedEducations.map((education) => {
                            return (
                                <div className="container card mt-2 mb-2">
                                    <div className="row">
                                        <div className="col" data-bs-toggle="tooltip" data-bs-placement="top" title={education.graduationDate}>
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1">{education.degree}</h5>
                                            </div>
                                            <h5 className="mb-1">{education.major}</h5>
                                            <p className="mb-1">{education.school}</p>
                                            <small>Graduation Date: {education.graduationDate}</small>
                                            {/* <button className="mb-2 offset-md-5" type="submit" onClick={() => handleSaveEducation(education)}>Save</button> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                            
                        ) : (
                            <h5>You have not entered any education information!</h5>
                        )}
                    </ul>
                </div>
                <div className="col-md-5 bg-primary rounded m-1 mt-2">
                    <h2 className="text-center text-white">Skills:</h2>
                    <ul className="list-group">
                        <div className="row justify-content-between">
                            <div className="card mt-2 m-4 col-5">
                                <h5 className="card-header border-dark border-3 text-center">Technical Skills:</h5>
                                {savedTechnicalSkills?.length ? (
                                    <ul className="list-group card-body">
                                        {TechnicalSkillItems}
                                    </ul>
                                ) : (
                                    <h4>No Technical Skills Added</h4>
                                )}
                            </div>
                        
                            <div className="card mt-2 m-4 col-5">
                                <h5 className="card-header border-dark border-3 text-center">Languages:</h5>
                                {savedLanguages?.length ? (
                                    <ul className="list-group">
                                        {LanguageItems}
                                    </ul>
                                ) : (
                                    <h4>No Languages Added</h4>
                                )}
                            </div>

                        </div>
                        
                        <div className="row justify-content-between">
                        
                            <div className="card mt-3 mb-3 m-4 col-5">
                                <h5 className="card-header border-dark border-3 text-center">Soft Skills:</h5>
                                {savedSoftSkills?.length ? (
                                    <ul className="list-group">
                                        {SoftSkillItems}
                                    </ul>
                                ) : (
                                    <h4>You have no soft skills entered.</h4>
                                )}
                            </div>
                            
                            <div className="card mt-3 mb-3 m-4 col-5">
                                <h5 className="card-header border-dark border-3 text-center">Interests:</h5>
                                {savedInterests?.length ? (
                                    <ul className="list-group">
                                        {InterestItems}
                                    </ul>
                                ) : (
                                    <h4>You have no interests entered.</h4>
                                )}
                            </div>
                        </div>
                        
                    </ul>
                </div>
                <div className="col-md-3 bg-primary rounded m-1 mt-2">
                    <h2 className="text-center text-white">Experiences:</h2>
                    <ul className="list-group">
                        {(savedExperiences?.length > 0) ? (savedExperiences.map((experience, idx) => {
                            return (
                                <div className="container card mt-2 mb-2">
                                    <div className="row">
                                        <div className="col" data-bs-toggle="tooltip" data-bs-placement="top" title={experience.description} key={experience._id}>
                                            <div className="d-flex w-100 justify-content-between mt-1 mb-1">
                                                <h5 className="mb-1">{experience.position}</h5>
                                            </div>
                                            <h5 className="mb-1">{experience.organization}</h5>
                                            <p className="mb-1">{experience.location}</p>
                                            {/* <button className="mb-2 offset-md-5" type="submit" onClick={() => handleSaveExperience(experience)}>Save</button> */}
                                        </div>
                                    </div>
                                </div>
                            )
                            })
                            
                        ) : (
                            <h5>You have not entered any experience information!</h5>
                        )}
                    </ul>
                </div>
            </div>
            <div className="row justify-content-center">
                <button className="col-6 bg-success rounded m-1 text-center text-white" type='button'>
                    <h1>Generate Resume</h1>
                </button>
            </div>
        </div>
        
    );
}

export default Dashboard;