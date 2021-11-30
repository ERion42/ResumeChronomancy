import React from 'react';
import SkillsForm from '../../../components/forms/SkillsForm';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import decode from 'jwt-decode'


function DBSkills() {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(token)
    const decoded = decode(token)
    console.log(decoded)
    const profileId = useParams();
    const { data } = useQuery(QUERY_ME, {
        variables: { profileId: decoded.data._id }
    })

    console.log(data.me.userInfos[0].firstName)

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
                                <h5 className="mb-1">Skill Name</h5>
                            </div>
                            <p className="mb-1">Skill Type</p>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Skill Name</h5>
                            </div>
                            <p className="mb-1">Skill Type</p>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Skill Name</h5>
                            </div>
                            <p className="mb-1">Skill Type</p>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Skill Name</h5>
                            </div>
                            <p className="mb-1">Skill Type</p>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Skill Name</h5>
                            </div>
                            <p className="mb-1">Skill Type</p>
                        </div>
                    </ul>
                </div>
                
            </div>

            {/* At SOME point we may want to have a larger container below this to show more data from the selected data item */}
        </div>
        
    );
}

export default DBSkills;