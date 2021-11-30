import React from 'react';
import ExperienceForm from '../../../components/forms/ExperiencesForm';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../../utils/queries';
import Auth from '../../../utils/auth';
import decode from 'jwt-decode'


function DBExperience() {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(token)
    const decoded = decode(token)
    console.log(decoded)
    const profileId = useParams();
    const { data } = useQuery(QUERY_ME, {
        variables: { profileId: decoded.data._id }
    })

    const profile = data?.me || {}
    console.log(profile);
    // nothing yet
    return (
        <div className="container">
            <div className="row flex-lg-row-reverse align-items-center">
                <div className="col bg-primary rounded m-1 mt-3 p-3 text-center text-white">
                    <h1>Experience Dashboard</h1>
                </div>
            </div>                
            <div className="row justify-content-center">
                <div className="col-md-5 bg-warning rounded m-1 pt-2 pb-2 mt-4">
                    <h2>Update Experience</h2>
                    <ExperienceForm />
                </div>
                <div className="col-md-6 bg-info rounded m-1 pt-2 mt-4">
                    <h2>My Experience</h2>
                    <ul className="list-group">
                        {/* Template for Item List */}
                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Organization</h5>
                            </div>
                            <p className="mb-1">Title</p>
                            <small>Years Active</small>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Organization</h5>
                            </div>
                            <p className="mb-1">Title</p>
                            <small>Years Active</small>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Organization</h5>
                            </div>
                            <p className="mb-1">Title</p>
                            <small>Years Active</small>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Organization</h5>
                            </div>
                            <p className="mb-1">Title</p>
                            <small>Years Active</small>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Organization</h5>
                            </div>
                            <p className="mb-1">Title</p>
                            <small>Years Active</small>
                        </div>

                    </ul>
                </div>
                
            </div>

            
        </div>
        
    );
}

export default DBExperience;