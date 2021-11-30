import React from 'react';
import EducationForm from '../../../components/forms/EducationForm';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../../utils/queries';
import Auth from '../../../utils/auth';
import decode from 'jwt-decode'


function DBEducation() {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(token)
    const decoded = decode(token)
    console.log(decoded)
    const profileId = useParams();
    const { data } = useQuery(QUERY_ME, {
        variables: { profileId: decoded.data._id }
    })

    const profile = data?.me || {};
    const addEducation = data?.me || {}

    console.log(profile);
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
                    <ul className="list-group">
                        {/* Template for Item List */}
                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">School: {profile.educations[0].school}</h5>
                            </div>
                            <p className="mb-1">Degree and Major: {profile.educations[0].degree} {profile.educations[0].major}</p>
                            <small>Year of Graduation: {profile.educations[0].graduationDate}</small>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">School:{profile.addEducations}</h5>
                            </div>
                            <p className="mb-1">Degree and Major</p>
                            <small>Year of Graduation</small>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">School</h5>
                            </div>
                            <p className="mb-1">Degree and Major</p>
                            <small>Year of Graduation</small>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">School</h5>
                            </div>
                            <p className="mb-1">Degree and Major</p>
                            <small>Year of Graduation</small>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">School</h5>
                            </div>
                            <p className="mb-1">Degree and Major</p>
                            <small>Year of Graduation</small>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DBEducation;