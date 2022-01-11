import React, { useState } from 'react';
import ExperienceForm from '../../../components/forms/ExperiencesForm';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../../utils/queries';
import { saveExperiences } from '../../../utils/localstorage';
import DeleteButton from '../../../components/buttons/DeleteButton';
import Auth from '../../../utils/auth';
import decode from 'jwt-decode'

const experienceArray = [];

function DBExperience() {
    const { profileId } = useParams();
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(token)
    const decoded = decode(token)
    
    const { data } = useQuery(QUERY_ME, {
        variables: { profileId: decoded.data._id }
    })
    console.log(data)
    const profile = data?.me || {};
    console.log(profile)
    const experiences = profile.experiences;
    const experiencesArrayLength = experiences.length;

    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        event.preventDefault()
        setChecked(!checked);
    };

    const handleSaveExperience = async (experience) => {
        experienceArray.push(experience)
        saveExperiences(experienceArray)
    }


    const items = experiences.map((experience, idx) => {
        return (
            <div className="container mt-1 mb-2" data-bs-toggle="tooltip" data-bs-placement="top" title={experience.description}>
                <div className="row">
                    <div className="col-8">
                        <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1">{experience.position}</h6>
                            <br />
                            
                        </div>
                        <h6 className="mb-1">{experience.organization}</h6>
                        <p className="mb-1">Start: {experience.startDate} - End: {experience.endDate}</p>
                        <small>{experience.location}</small>
                    </div>
                    <div className="col-2">
                        <button type="submit" onClick={() => handleSaveExperience(experience)}>Save</button>
                    </div>
                    <div className='col-1'>
                        <DeleteButton />
                    </div>
                </div>
            </div>
        )
    })
    
    // nothing yet
    return (
        <div className="container">
            <div className="row flex-lg-row-reverse align-items-center">
                <div className="col bg-primary rounded m-1 mt-3 p-3 text-center text-white">
                    <h1>Experience Dashboard</h1>
                </div>
            </div>                
            <div className="row justify-content-center">
                <div className="col-md-4 bg-warning rounded m-1 pt-2 pb-2 mt-4">
                    <h2 className="text-center">Add Experience:</h2>
                    <ExperienceForm />
                </div>
                <div className="col-md-7 bg-info rounded m-1 pt-2 mt-4">
                    <h2 className="text-center text-white">My Experience:</h2>
                        {experiencesArrayLength ? (
                            <ul className="list-group">
                                {items}
                            </ul>
                        ) : (
                            <h3>You haven't added any experiences yet!</h3>
                        )}
                </div>
                
            </div>

            
        </div>
        
    );
}

export default DBExperience;