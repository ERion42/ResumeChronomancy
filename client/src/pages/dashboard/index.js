import React from 'react';
import EducationForm from '../../components/forms/EducationForm';
// import ExperienceForm from '../../components/forms/ExperiencesForm';
// import SkillForm from '../../components/forms/SkillsForm';



function Dashboard() {
    // nothing yet
    return (
        <div className="container ">
            <div class="row">
                <div className="col-4 bg-info rounded m-1 pb-2">
                    <h2>Education</h2>
                    <EducationForm />
                </div>
                <div className="col-md bg-warning rounded m-1">
                    <h2>Skills</h2>
                </div>
                <div className="col-md bg-primary rounded m-1">
                    <h3>Experience</h3>
                </div>
            </div>
        </div>
        
    );
}

export default Dashboard;