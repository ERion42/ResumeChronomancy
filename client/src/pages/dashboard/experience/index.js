import React from 'react';
import ExperienceForm from '../../../components/forms/ExperiencesForm';



function DBEducation() {
    // nothing yet
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5 bg-warning rounded m-1 pb-2">
                    <h2>Update Experience</h2>
                    <ExperienceForm />
                </div>
                <div className="col-md-6 bg-info rounded m-1">
                    <h2>My Experience</h2>
                    <ul className="list-group">
                        <li className="list-group-item mt-4 active">Item</li>
                        <li className="list-group-item">Item</li>
                        <li className="list-group-item">Item</li>
                        <li className="list-group-item">Item</li>
                        <li className="list-group-item">Item</li>
                        <li className="list-group-item">Item</li>
                        <li className="list-group-item">Item</li>
                        <li className="list-group-item">Item</li>
                        <li className="list-group-item">Item</li>
                        <li className="list-group-item">Item</li>
                        
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

export default DBEducation;