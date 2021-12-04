import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_TECHNICAL_SKILL } from '../../utils/mutations';
import decode from 'jwt-decode';

import Auth from '../../utils/auth';

const TechnicalSkillsForm = () => {
    const [userFormData, setUserFormData] = useState({ technicalSkill: '' });
    // const [owner, setOwner] = useState({});
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [addTechnicalSkill, { error }] = useMutation(ADD_TECHNICAL_SKILL);
    

    useEffect(() => {
        if (error) {
        setShowAlert(true);
        } else {
        setShowAlert(false);
        }
    }, [error]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        const token = Auth.loggedIn() ? Auth.getToken() : null;
        const decoded = decode(token)
        console.log(decoded)
        const owner = decoded.data._id
        console.log('this is the owner' ,owner)
      
        if(!token) {
            return false;
        }

        try {
            
            const data = await addTechnicalSkill({
                variables: { profileId: owner, ...userFormData },
            });
            console.log(data)
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setUserFormData({
            technicalSkill: '',  
        });
    };

    return (
        <>
            {Auth.loggedIn() ? (
                <Form noValidate validated={validated} onSubmit={handleFormSubmit} >
                    <Alert
                        dismissible
                        onClose={() => setShowAlert(false)}
                        show={showAlert}
                        variant="danger"
                    ></Alert>
                    <Form.Group>
                        <Form.Label htmlFor="technicalSkill">Technical Skills</Form.Label>
                        <Form.Control type="text" placeholder="Your Technical Skills" name="technicalSkill" onChange={handleInputChange} value={userFormData.technicalSkill} required />
                        <Form.Control.Feedback type="invalid">
                            Technical Skills is required!
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* <Form.Group>
                        <Form.Label className ="padding" htmlFor="languages">Languages</Form.Label>
                        <Form.Control type="text" placeholder="Your Languages" name="languages" onChange={handleInputChange} value={userFormData.languages} required />
                        <Form.Control.Feedback type="invalid">
                            Languages is required!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className ="padding" htmlFor="softSkills">Soft Skills</Form.Label>
                        <Form.Control type="text" placeholder="Your Soft Skills" name="softSkills" onChange={handleInputChange} value={userFormData.softSkills} required />
                        <Form.Control.Feedback type="invalid">
                            Soft Skills is required!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className ="padding" htmlFor="interests">Interests</Form.Label>
                        <Form.Control type="text" placeholder="Your Interests" name="interests" onChange={handleInputChange} value={userFormData.interests} required />
                        <Form.Control.Feedback type="invalid">
                            Interests is required!
                        </Form.Control.Feedback>
                    </Form.Group> */}

                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <Button 
                                    className="padding mb-2 bg-dark btn-outline-dark w-100 align-center text-white"
                                    disabled={!(userFormData.technicalSkill)}
                                    type="submit"
                                    variant="success"
                                >Submit</Button>
                            </div>
                        </div>
                    </div>

                </Form>
            ) : (
                <p>Please Log in</p>
            )
}
            
        </>
    )
}

export default TechnicalSkillsForm;