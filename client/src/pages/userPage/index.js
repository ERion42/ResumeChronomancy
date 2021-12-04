import React from 'react';
import UserInfoForm from '../../components/forms/UserInfoForm'
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME, QUERY_SINGLE_PROFILE } from '../../utils/queries';
import Auth from '../../utils/auth';
import decode from 'jwt-decode'
import { saveUserInfo } from '../../utils/localstorage';



// query and function works, roughly, revisiting things from graphQL side
function UserPage({faq, index, toggleFAQ}) {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    
    const decoded = decode(token)
    console.log('this is the decoded token', decoded)
    console.log('this is the decoded token userid', decoded.data._id)
    const profileId = useParams();
    const { data } = useQuery(QUERY_ME, {
        variables: { profileId: decoded.data._id }
    })

    console.log('this is the data', data)

    const profile = data?.me || {}
    console.log('this is the profile', profile);
    const userInfo = profile.userInfos[0]
    const educations = profile.educations
    const experiences = profile.experiences
    console.log('this is the user educations', educations)
    console.log('this is the user Experiences', experiences)
    console.log('this is the userinfos', userInfo)
    

    const handleAddToResume = async () => {
        saveUserInfo(userInfo)
        const fullName = userInfo.firstName + " " + userInfo.lastName;
        const address = userInfo.address
        const phone = userInfo.phoneNumber
        const email = userInfo.email
        console.log()
        for (let i = 0; i < 3; i++) {
            
            let education = educations[i]
            console.log(education)
        }
        
    }

    return (
        <section className="container"> 
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col bg-info rounded m-1 p-5 text-center">
                    <h2>User Account</h2>
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
                
                <div className="col-lg-6">
                    {userInfo ? (
                        <div className="bg-info rounded m-0 p-3 h-100">
                            <h3>Name:</h3>
                            <p>{userInfo.firstName}  {userInfo.lastName}</p>
                            <br />
                            <h3>Address:</h3>
                            <p>{userInfo.address}</p>
                            <br />
                            <h3>Phone:</h3>
                            <p>{userInfo.phoneNumber}</p>
                            <br />
                            <h3>Email:</h3>
                            <p>{userInfo.email}</p>
                            <br />
                            <button onClick={handleAddToResume}>Generate</button>
                        </div>
                    ) : ( 
                        <div className="row flex-lg-row">
                            <div className="col-lg bg-info rounded m-3 p-3 text-center">
                                <p>Username: {profile.username}</p>
                                <input className="form-control" type="text" disabled>
                                    
                                </input>
                            </div>
                            <div className="col-lg bg-info rounded m-3 p-3 text-center">
                                <p>Email Address: </p>
                                <input className="form-control" type="text" disabled>

                                </input>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="bg-warning rounded m-0 p-3 h-100">
                                    <UserInfoForm />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
        </section>
    )
}

export default UserPage;