import React, { useState } from 'react';
import EducationForm from '../../components/forms/EducationForm';
import ExperienceForm from '../../components/forms/ExperiencesForm';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import decode from 'jwt-decode'
import { saveEducations, saveExperiences, saveTechnicalSkill, saveLanguage, saveSoftSkill, saveInterest } from '../../utils/localstorage';

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
    console.log(data)

    const profile = data?.me || {}
 
    const educations = profile.educations;
    console.log(educations)
    const experiences = profile.experiences;
    const technicalSkills = profile.technicalSkills;
    const languages = profile.languages;
    const softSkills = profile.softSkills;
    const interests = profile.interests;

    const technicalSkillsArrayLength = technicalSkills?.length
    const languagesArrayLength = languages?.length
    const softSkillsArrayLength = softSkills?.length;
    const interestsArrayLength = interests?.length;

    const handleSaveEducation = async (education) => {
        educationArray.push(education)
        console.log(educationArray)
        saveEducations(educationArray)
        console.log(education)
    }

    const handleSaveExperience = async (experience) => {
        experienceArray.push(experience)
        console.log(experienceArray)
        saveExperiences(experienceArray)
        console.log(experience)
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

    const TechnicalSkillItems = technicalSkills?.map((technicalSkill) => {
        return (
            <div className="container" data-bs-toggle="tooltip" data-bs-placement="top" title={technicalSkill}>
                <div className="row">
                    <div className="col">
                        <div className="d-flex w-100 justify-content-between mt-1 mb-1">
                            <h5 className="mb-1" key={technicalSkill.id}>{technicalSkill}</h5>
                            <button type="submit" onClick={() => handleSaveTechnicalSkill(technicalSkill)}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    const LanguageItems = languages?.map((language) => {
        return (
            <div className="container" data-bs-toggle="tooltip" data-bs-placement="top" title={language}>
                <div className="row">
            
                    <div className="col">
                        <div className="d-flex w-100 justify-content-between mt-1 mb-1">
                            <h5 className="mb-1">{language}</h5>
                            <button type="submit" onClick={() => handleSaveLanguage(language)}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    const SoftSkillItems = softSkills?.map((softSkill) => {
        return (
            <div className="container" data-bs-toggle="tooltip" data-bs-placement="top" title={softSkill}>
                <div className="row">
                
                    <div className="col">
                        <div className="d-flex w-100 justify-content-between mt-1 mb-1">
                            <h5 className="mb-1">{softSkill}</h5>
                            <button type="submit" onClick={() => handleSaveSoftSkill(softSkill)}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    const InterestItems = interests?.map((interest) => {
        return (
            <div className="container" data-bs-toggle="tooltip" data-bs-placement="top" title={interest}>
                <div className="row">
            
                    <div className="col">
                        <div className="d-flex w-100 justify-content-between mt-1 mb-1">
                            <h5 className="mb-1">{interest}</h5>
                            <button type="submit" onClick={() => handleSaveInterest(interest)}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    
    // Waiting for forms for Skills and Experience... odds are we're going to have to re-do this one. I feel like we probably need 

    
    return (
        <div className="container ">

            <div className="row">
                
                
                <div className="col-md-4 bg-primary rounded m-1 pb-4 mt-4 ">
                    <h2>Education</h2>
                    
                    <ul className="list-group checkbox-list-group">
                        {(educations?.length > 0) ? (educations.map((education) => {
                            return (
                                <div className="container card mt-2 mb-2">
                                    <div className="row">
                                        <div className="col" data-bs-toggle="tooltip" data-bs-placement="top" title={education.graduationDate}>
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1">{education.school}</h5>
                                            </div>
                                            <p className="mb-1">{education.degree} in {education.major}</p>
                                            <button className="mb-2 offset-md-5" type="submit" onClick={() => handleSaveEducation(education)}>Save</button>
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
                <div className="col-md bg-primary rounded m-1 mt-4">
                    <h2>Skills</h2>
                    <ul className="list-group">
                        <div className="card mt-2">
                            <h5 className="card-header text-center">Technical Skills</h5>
                            {technicalSkillsArrayLength ? (
                                <ul className="list-group card-body">
                                    {TechnicalSkillItems}
                                </ul>
                            ) : (
                                <h4>No Technical Skills</h4>
                            )}
                        </div>
                        
                        <div className="card mt-3">
                            <h5 className="card-header text-center">Languages</h5>
                            {languagesArrayLength ? (
                                <ul className="list-group">
                                    {LanguageItems}
                                </ul>
                            ) : (
                                <h4>No Languages</h4>
                            )}
                        </div>
                        
                        <div className="card mt-3">
                            <h5 className="card-header text-center">Soft Skills</h5>
                            {softSkillsArrayLength ? (
                                <ul className="list-group">
                                    {SoftSkillItems}
                                </ul>
                            ) : (
                                <h4>You have no soft skills entered.</h4>
                            )}
                        </div>
                        
                        <div className="card mt-3 mb-3">
                            <h5 className="card-header">Interests</h5>
                            {interestsArrayLength ? (
                                <ul className="list-group">
                                    {InterestItems}
                                </ul>
                            ) : (
                                <h4>You have no interests entered.</h4>
                            )}
                        </div>
                        
                    </ul>
                </div>
                <div className="col-md bg-primary rounded m-1 mt-4">
                    <h3>Experience</h3>
                    <ul className="list-group">
                        {(experiences?.length > 0) ? (experiences.map((experience, idx) => {
                            return (
                                <div className="container card mt-2 mb-2">
                                    <div className="row">
                                        <div className="col" data-bs-toggle="tooltip" data-bs-placement="top" title={experience.description} key={idx}>
                                            <div className="d-flex w-100 justify-content-between mt-1 mb-1">
                                                <h5 className="mb-1">{experience.position} at {experience.organization}</h5>
                                            </div>
                                            <p className="mb-1">{experience.location}</p>
                                            <button className="mb-2 offset-md-5" type="submit" onClick={() => handleSaveExperience(experience)}>Save</button>
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
                <button className="col-6 bg-success rounded m-1 text-center text-white">
                    <h1>Generate Resume</h1>
                </button>
            </div>
        </div>
        
    );
}

export default Dashboard;