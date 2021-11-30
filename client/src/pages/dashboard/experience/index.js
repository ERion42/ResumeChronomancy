import React from 'react';
import ExperienceForm from '../../../components/forms/ExperiencesForm';



function DBExperience() {
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