import React from 'react';
import EducationForm from '../../../components/forms/EducationForm';



function DBEducation() {
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