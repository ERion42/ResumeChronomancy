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
    
    const profileId = useParams();
    const { data } = useQuery(QUERY_ME, {
        variables: { profileId: decoded.data._id }
    })

    

    const profile = data?.me || {}
   
    const userInfos = profile.userInfos
    const educations = profile.educations
    const experiences = profile.experiences
    console.log('this is the user info', userInfos)

    const userInfoItems = userInfos?.map(info => {
        return (
            <div className="container">
                <div className="row">
                    <h5>{info.firstName} {info.lastName}</h5>
                    <br />
                    <h5>{info.address}</h5>
                    <br />
                    <h5>{info.phoneNumber}</h5>
                    <br />
                    <h5>{info.email}</h5>
                    <br />
                </div>
            </div>
        )
    })
    
    

    const handleAddToResume = async () => {
        saveUserInfo(userInfos[0])
        const fullName = userInfos[0].firstName + " " + userInfos[0].lastName;
        const address = userInfos[0].address
        const phone = userInfos[0].phoneNumber
        const email = userInfos[0].email
        console.log()
        for (let i = 0; i < 3; i++) {
            
            let education = educations[i]
            console.log(education)
        }
        
    }

    return (
        <section className="fluid-container"> 
            
            
            <div className="row flex-lg-row">
                {userInfos?.length ? (userInfos.map(userInfo => {
                    return (
                        <div className="row flex-lg-row-reverse align-items-center  ">
                            <div className="col bg-primary rounded m-1 p-5 text-center text-white">
                                <h2>Welcome back, </h2>
                               
                                <h2>{userInfo.firstName} {userInfo.lastName}</h2>
                            </div>
                        </div>
                    )
                })
                ) : (
                    <div className="row flex-lg-row-reverse align-items-center  ">
                            <div className="col bg-primary rounded m-1 p-5 text-center text-white">
                                <h2>Welcome back,</h2>
                               
                                <h2>{profile.username}</h2>
                            </div>
                        </div>
                )}
                <div className="col-lg-6">
                    {userInfos?.length ? (
                        <div className="bg-info rounded m-0 p-3 h-100">
                            {userInfoItems}
                            {/* <h3>Name:</h3>
                            <p>{userInfos[0].firstName}  {userInfos[0].lastName}</p>
                            <br />
                            <h3>Address:</h3>
                            <p>{userInfos[0].address}</p>
                            <br />
                            <h3>Phone:</h3>
                            <p>{userInfos[0].phoneNumber}</p>
                            <br />
                            <h3>Email:</h3>
                            <p>{userInfos[0].email}</p>
                            <br /> */}
                            <button onClick={handleAddToResume}>Add To Resume</button>
                        </div>
                    ) : ( 
                        <div className="row flex-lg-row">
                            {/* <div className="col-lg bg-info rounded m-3 p-3 text-center">
                                <p>Username: {profile.username}</p>
                            </div>
                            <div className="col-lg bg-info rounded m-3 p-3 text-center">
                                <p>Email Address: {profile.email} </p>
                            </div>
         */}
                            <div className="col-lg">
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