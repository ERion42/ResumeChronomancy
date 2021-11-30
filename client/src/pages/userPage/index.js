import React from 'react';
import UserInfoForm from '../../components/forms/UserInfoForm';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import decode from 'jwt-decode'


function UserPage() {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    // console.log(token)
    const decoded = decode(token)
    // console.log(decoded)
    const profileId = useParams();
    const { data } = useQuery(QUERY_ME, {
        variables: { profileId: decoded.data._id }
    })

    const profile = data?.me || {}
    // console.log(profile.userInfos);

    return (
        <section className="container"> 
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col bg-info rounded m-1 p-5 text-center">
                    <h1>User Account</h1>
                </div>
            </div>
            <div className="row flex-lg-row">
                <div className="col-lg bg-info rounded m-3 p-3 text-center">
                    <h2>Username: </h2>
                    <p>
                        {decoded.data.username}
                    </p>
                    
                </div>
                <div className="col-lg bg-info rounded m-3 p-3 text-center">
                    <h2>Email Address: </h2>
                    <p>
                        {decoded.data.email}
                    </p>
                </div>
            </div>
                       
            {/* Temporarily disabled, future feature */}
            {/* <div className="row flex-lg-row">
                <div className="col-lg bg-info rounded m-3 p-3">
                    <p>Most Recent Job</p>
                    <input className="form-control" type="text" disabled>

                    </input>
                </div>
            </div> */}

            <div className="row flex-lg-row">
                <div className="col-lg-6 ">
                    <div className="bg-info rounded m-0 p-3 h-100">
                        <UserInfoForm />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="bg-info rounded m-0 p-3 h-100">
                        <h3>Name:</h3>
                        <p>{profile.userInfos[0].firstName} {profile.userInfos[0].lastName}</p>
                        <br />
                        <h3>Address: </h3>
                        <p>{profile.userInfos[0].address}</p>
                        <br />
                        <h3>Phone: </h3>
                        <p>{profile.userInfos[0].phoneNumber}</p>
                        <br />
                        <h3>Email: </h3>
                        <p>{profile.userInfos[0].email}</p>
                        <br />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserPage