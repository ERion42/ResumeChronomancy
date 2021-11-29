import React from 'react';
import SkillsForm from '../../../components/forms/SkillsForm';



function DBSkills() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5 bg-warning rounded m-1 pb-2">
                    <h2>Update Skills</h2>
                     <SkillsForm />
                </div>
                <div className="col-md-6 bg-info rounded m-1 pb-2">
                    <h2>My Skills</h2>
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

export default DBSkills;