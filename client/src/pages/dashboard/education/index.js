import React, { useState } from 'react';
import EducationForm from '../../../components/forms/EducationForm';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../../utils/queries';
import Auth from '../../../utils/auth';
import decode from 'jwt-decode'


function DBEducation() {
    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        event.preventDefault()
        setChecked(!checked);
    };
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    
    const decoded = decode(token)
   
    const profileId = useParams();
    const { data } = useQuery(QUERY_ME, {
        variables: { profileId: decoded.data._id }
    })

    const profile = data?.me || {}
    
    const educations = profile.educations;
    
    const educationsArrayLength = educations?.length;

    const items = educations?.map((education) => {
        return (
            <div className="container" data-bs-toggle="tooltip" data-bs-placement="top" title={education.certifications}>
                <div className="row">
                    
                    <div className="col">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{education.degree} in {education.major}</h5>
                        </div>
                        <p className="mb-1">{education.school}</p>
                        <small>{education.graduationDate}</small>
                    </div>
                </div>
                <br />
            </div>
        )
    })
    // nothing yet
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5 bg-warning rounded m-1 pt-2 pb-2 mt-4">
                    <h2>Update Education</h2>
                    <EducationForm />
                </div>
                <div className="col-md-6 bg-info rounded m-1 mt-4 pt-2">
                    <h2>My Education</h2>
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