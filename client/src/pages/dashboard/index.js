import React from 'react';
import EducationForm from '../../components/forms/EducationForm';
// import ExperienceForm from '../../components/forms/ExperiencesForm';
// import SkillForm from '../../components/forms/SkillsForm';



function Dashboard() {
    // nothing yet
    return (
        <div className="container">
            <div class="row">
                <div className="col-4">
                    <h2>Education</h2>
                    <EducationForm />
                </div>
                <div className="col-4">
                    <h2>Skills</h2>
                </div>
                <div className="col-4">
                    <h3>Experience</h3>
                </div>
            </div>
        </div>
        
    );
}

export default Dashboard;