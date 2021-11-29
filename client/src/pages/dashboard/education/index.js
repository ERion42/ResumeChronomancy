import React from 'react';
import EducationForm from '../../components/forms/EducationForm';



function DBEducation() {
    // nothing yet
    return (
        <div className="container">
            <div class="row-4">
                <div className="col-4 bg-info rounded m-1 pb-2">
                    <h2>Update Education</h2>
                    <EducationForm />
                </div>
                <div className="col-md bg-warning rounded m-1">
                    <h2>My Education</h2>
                    
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