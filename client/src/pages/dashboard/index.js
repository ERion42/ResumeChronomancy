import React from 'react';
import EducationForm from '../../components/forms/EducationForm';
import ExperienceForm from '../../components/forms/ExperiencesForm';



function Dashboard() {
    // Waiting for forms for Skills and Experience... odds are we're going to have to re-do this one. I feel like we probably need 
    return (
        <div className="container ">
            <div class="row">
                <div className="col-md-4 bg-info rounded m-1 pb-4 mt-4 ">
                    <h2>Education</h2>
                    <ul className="list-group">
                        {/* Template for Item List */}
                        <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </a>
                    </ul>
                </div>
                <div className="col-md bg-warning rounded m-1 mt-4">
                    <h2>Skills</h2>
                    <ul className="list-group">
                        {/* Template for Item List */}
                        <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </a>
                    </ul>
                </div>
                <div className="col-md bg-primary rounded m-1 mt-4">
                    <h3>Experience</h3>
                    <ul className="list-group">
                        {/* Template for Item List */}
                        <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-6 bg-success rounded m-1 text-center text-white">
                    <h1>Generate Resume</h1>
                </div>
            </div>
        </div>
        
    );
}

export default Dashboard;