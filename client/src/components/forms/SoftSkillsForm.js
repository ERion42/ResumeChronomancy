import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_SOFT_SKILL } from '../../utils/mutations';
import decode from 'jwt-decode';

import Auth from '../../utils/auth';

const SoftSkillsForm = () => {
    const [userFormData, setUserFormData] = useState({ softSkill: '' });

    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [addSoftSkill, { error }] = useMutation(ADD_SOFT_SKILL);
    

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
            
            const data = await addSoftSkill({
                variables: { profileId: owner, ...userFormData },
            });
            console.log(data)
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setUserFormData({
            softSkill: '',  
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
                        <Form.Label htmlFor="softSkill">Soft Skills</Form.Label>
                        <Form.Control type="text" placeholder="Your Soft Skills" name="softSkill" onChange={handleInputChange} value={userFormData.softSkill} required />
                        <Form.Control.Feedback type="invalid">
                            Soft Skills are required!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <Button 
                                    className="padding mb-2 bg-dark btn-outline-dark w-100 align-center text-white"
                                    disabled={!(userFormData.softSkill)}
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

export default SoftSkillsForm;