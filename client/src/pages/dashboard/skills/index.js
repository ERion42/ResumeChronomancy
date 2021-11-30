import React from 'react';
import SkillsForm from '../../../components/forms/SkillsForm';



function DBSkills() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5 bg-warning rounded pt-2 m-1 pb-2 mt-4">
                    <h2>Update Skills</h2>
                     <SkillsForm />
                </div>
                <div className="col-md-6 bg-info rounded m-1 pt-2 pb-2 mt-4">
                    <h2>My Skills</h2>
                    <ul className="list-group">
                        {/* Template for Item List */}
                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Skill Type</h5>
                            </div>
                            <p className="mb-1">Skill Name</p>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Skill Type</h5>
                            </div>
                            <p className="mb-1">Skill Name</p>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Skill Type</h5>
                            </div>
                            <p className="mb-1">Skill Name</p>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Skill Type</h5>
                            </div>
                            <p className="mb-1">Skill Name</p>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Skill Type</h5>
                            </div>
                            <p className="mb-1">Skill Name</p>
                        </div>
                    </ul>
                </div>
                
            </div>

            {/* At SOME point we may want to have a larger container below this to show more data from the selected data item */}
        </div>
        
    );
}

export default DBSkills;