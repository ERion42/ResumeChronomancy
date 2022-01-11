import React, { useState } from 'react';
import EducationForm from '../../../components/forms/EducationForm';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../../utils/queries';
import { REMOVE_EDUCATION } from '../../../utils/mutations';
import Auth from '../../../utils/auth';
import DeleteButton from '../../../components/buttons/DeleteButton'
import { saveEducations } from '../../../utils/localstorage';
import decode from 'jwt-decode'

const educationArray = [];

function DBEducation() {
    
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    
    const decoded = decode(token)
   
    const profileId = useParams();
    const { data } = useQuery(QUERY_ME, {
        variables: { profileId: decoded.data._id }
    })

    const profile = data?.me || {}
    
    const educations = profile.educations;

    
    const educationsArrayLength = educations?.length;

    const handleSaveEducation = async (education) => {
        educationArray.push(education)
        saveEducations(educationArray)
    }

    // const [removeEducation, { error }] = useMutation(REMOVE_EDUCATION);
    // const handleRemoveEducation = async (education) => {
    //     console.log(education)
    //     console.log('removing education')
    //     try {
    //         const educationData = education
    //         await removeEducation(educationData)
    //         console.log(`${education} successfully removed`)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    const items = educations?.map((education) => {
        
        return (
            <div className="container" data-bs-toggle="tooltip" data-bs-placement="top" title={education.certifications}>
                <div className="row">
                    <div className="col-8">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{education.degree}</h5>
                        </div>
                        <h5 className="mb-1">{education.major}</h5>
                        <p className="mb-1">{education.school}</p>
                        <small>Graduation Date: {education.graduationDate}</small>
                    </div>
                    <div className='col-2'>
                        <button type="submit" onClick={() => handleSaveEducation(education)}>Save</button>
                    </div>
                    {/* <div className='col-1'>
                        <button type='submit' onClick={() => handleRemoveEducation(education)}>✗</button>
                    </div> */}
                </div>
                <br />
            </div>
        )
    })
    // nothing yet
    return (
        <div className="container">
            <div className="row flex-lg-row-reverse align-items-center">
                <div className="col bg-primary rounded m-1 mt-3 p-3 text-center text-white">
                    <h1>Education Dashboard</h1>
                </div>
            </div>    
            <div className="row justify-content-center">
                <div className="col-md-4 bg-warning rounded m-1 pt-2 pb-2 mt-4">
                    <h2 className="text-center">Add Education:</h2>
                    <EducationForm />
                </div>
                <div className="col-md-7 bg-info rounded m-1 mt-4 pt-2">
                    <h2 className="text-center text-white">My Education:</h2>
                        {educationsArrayLength ? (
                            <ul className="list-group">
                                {items}
                            </ul>
                        ) : (
                            <h3>You haven't added any education yet!</h3>
                        )}
                </div>
            </div>
        </div>
    );
}

export default DBEducation;