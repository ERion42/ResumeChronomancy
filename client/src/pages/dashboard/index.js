import React from 'react';
import EducationForm from '../../components/forms/EducationForm';
import ExperienceForm from '../../components/forms/ExperiencesForm';



function Dashboard() {
    // Waiting for forms for Skills and Experience... odds are we're going to have to re-do this one. I feel like we probably need 
    return (
        <div className="container ">
            <div class="row">
                <div className="col-md-4 bg-info rounded m-1 pb-2">
                    <h2>Education</h2>
                    <EducationForm />
                </div>
                <div className="col-md bg-warning rounded m-1">
                    <h2>Skills</h2>
                    <EducationForm />
                </div>
                <div className="col-md bg-primary rounded m-1">
                    <h3>Experience</h3>
                    <ExperienceForm />
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