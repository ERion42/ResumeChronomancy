import React, { useState } from 'react';
import TechnicalSkillsForm from '../../../components/forms/TechnicalSkillsForm';
import LanguagesForm from '../../../components/forms/LanguagesForm';
import InterestsForm from '../../../components/forms/InterestsForm';
import SoftSkillsForm from '../../../components/forms/SoftSkillsForm';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../../utils/queries';
import { saveTechnicalSkill, saveLanguage, saveSoftSkill, saveInterest } from '../../../utils/localstorage';
import Auth from '../../../utils/auth';
import decode from 'jwt-decode'

const technicalSkillArray = [];
const languageArray = [];
const softSkillsArray = [];
const interestsArray = [];

function DBSkills() {
    
    const token = Auth.loggedIn() ? Auth.getToken() : null;
   
    const decoded = decode(token)
    
    const profileId = useParams();
    const { data } = useQuery(QUERY_ME, {
        variables: { profileId: decoded.data._id }
    })

    const profile = data?.me || {}
    console.log('this is the profile', profile);
    const technicalSkills = profile.technicalSkills;
    const languages = profile.languages;
    const softSkills = profile.softSkills;
    const interests = profile.interests;
   
    const technicalSkillsArrayLength = technicalSkills?.length
    const languagesArrayLength = languages?.length
    const softSkillsArrayLength = softSkills?.length;
    const interestsArrayLength = interests?.length;

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
                            <h6 className="mb-1" key={technicalSkill.id}>{technicalSkill}</h6>
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
                            <h6 className="mb-1">{language}</h6>
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
                            <h6 className="mb-1">{softSkill}</h6>
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
                            <h6 className="mb-1">{interest}</h6>
                            <button type="submit" onClick={() => handleSaveInterest(interest)}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5 bg-warning rounded pt-2 m-1 pb-2 mt-4">
                    <h2 className="text-center">Add Skills:</h2>
                    <div className="col-md-9 offset-md-1">
                        <TechnicalSkillsForm />
                        <LanguagesForm />
                        <InterestsForm />
                        <SoftSkillsForm />
                    </div>
                </div>
                <div className="col-md-5 bg-info rounded m-1 pt-2 pb-2 mt-4">
                    <h2 className="text-center text-white">My Skills:</h2>
                    <br />
                    <ul className="list-group">
                        <h5 className="text-center text-white">Technical Skills:</h5>
                        {technicalSkillsArrayLength ? (
                            <ul className="list-group">
                                {TechnicalSkillItems}
                            </ul>
                        ) : (
                            <h6 className="mt-2 text-center">No Technical Skills Added</h6>
                        )}
                        {/* Template for Item List */}
                        <h5 className="text-center text-white">Languages</h5>
                        {languagesArrayLength ? (
                            <ul className="list-group">
                                {LanguageItems}
                            </ul>
                        ) : (
                            <h6 className="mt-2 text-center">No Languages Added</h6>
                        )}
                        <h5 className="text-center text-white">Soft Skills</h5>
                        {softSkillsArrayLength ? (
                            <ul className="list-group">
                                {SoftSkillItems}
                            </ul>
                        ) : (
                            <h6 className="mt-2 text-center">You have no soft skills entered.</h6>
                        )}
                        <h5 className="text-center text-white">Interests</h5>
                        {interestsArrayLength ? (
                            <ul className="list-group">
                                {InterestItems}
                            </ul>
                        ) : (
                            <h6 className="mt-2 text-center">You have no interests entered.</h6>
                        )}
                    </ul>
                </div>
            </div>

            {/* At SOME point we may want to have a larger container below this to show more data from the selected data item */}
        </div>
        
    );
}

export default DBSkills;