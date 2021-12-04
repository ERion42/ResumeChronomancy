import React, { useState } from 'react';
import ExperienceForm from '../../../components/forms/ExperiencesForm';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../../utils/queries';
import Auth from '../../../utils/auth';
import decode from 'jwt-decode'



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


    const items = experiences.map((experience, idx) => {
        return (
            <div className="container mt-1 mb-2" data-bs-toggle="tooltip" data-bs-placement="top" title={experience.description}>
                <div className="row">
                    <div className="col">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{experience.position} at {experience.organization}</h5>
                        </div>
                        <p className="mb-1">Start: {experience.startDate} - End: {experience.endDate}</p>
                        <small>{experience.location}</small>
                    </div>
                </div>
            </div>
        )
    })
    
    // nothing yet
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5 bg-warning rounded m-1 pt-2 pb-2 mt-4">
                    <h2>Update Experience</h2>
                    <ExperienceForm />
                </div>
                <div className="col-md-6 bg-info rounded m-1 pt-2 mt-4">
                    <h2>My Experience</h2>
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