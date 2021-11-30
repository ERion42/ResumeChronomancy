import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../../utils/queries';
import Auth from '../../../utils/auth';
import decode from 'jwt-decode'

// query and function works, roughly, revisiting things from graphQL side
function UserPage({faq, index, toggleFAQ}) {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(token)
    const decoded = decode(token)
    console.log(decoded)
    const profileId = useParams();
    const { data } = useQuery(QUERY_ME, {
        variables: { profileId: decoded.data._id }
    })

    const profile = data?.me || {}
    console.log(profile);

    return (
        <section className="container"> 
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col bg-info rounded m-1 p-5 text-center">
                    <h2>User Account</h2>
                </div>
            </div>
            <div className="row flex-lg-row">
                <div className="col-lg bg-info rounded m-3 p-3 text-center">
                    <p>Username: </p>
                    <input className="form-control" type="text" disabled>

                    </input>
                </div>
                <div className="col-lg bg-info rounded m-3 p-3 text-center">
                    <p>Email Address: </p>
                    <input className="form-control" type="text" disabled>

                    </input>
                </div>
            </div>
            <div className="row flex-lg-row">
                <div className="col-lg bg-info rounded m-3 p-3">
                    <p>Most Recent Job</p>
                    <input className="form-control" type="text" disabled>

                    </input>
                </div>
            </div>
        </section>
    )
}

export default UserPage