import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_EXPERIENCE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const ExperienceForm = () => {
    const [userFormData, setUserFormData] = useState({ organization: '', position: '', startDate: '', endDate: '', location: '', description: '' });
    
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [addExperience, { error }] = useMutation(ADD_EXPERIENCE);
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

        try {
            const { data } = await addExperience({
                variables: { ...userFormData },
        });

            console.log(data);
            
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setUserFormData({
            organization: '', 
            position: '', 
            startDate: '', 
            endDate: '', 
            location: '', 
            description: '' 
        });
    };

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit} >
                <Alert
                    dismissible
                    onClose={() => setShowAlert(false)}
                    show={showAlert}
                    variant="danger"
                ></Alert>
                <Form.Group>
                    <Form.Label htmlFor="organization">organization</Form.Label>
                    <Form.Control type="text" placeholder="Organization" name="organization" onChange={handleInputChange} value={userFormData.organization} required />
                    <Form.Control.Feedback type="invalid">
                        organization is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="position">position</Form.Label>
                    <Form.Control type="text" placeholder="Position" name="position" onChange={handleInputChange} value={userFormData.position} required />
                    <Form.Control.Feedback type="invalid">
                        position is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="startDate">startDate</Form.Label>
                    <Form.Control type="text" placeholder="Start Date" name="startDate" onChange={handleInputChange} value={userFormData.startDate} required />
                    <Form.Control.Feedback type="invalid">
                        startDate is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="endDate">endDate</Form.Label>
                    <Form.Control type="text" placeholder="End Date" name="endDate" onChange={handleInputChange} value={userFormData.endDate} required />
                    <Form.Control.Feedback type="invalid">
                        endDate is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="location">location</Form.Label>
                    <Form.Control type="text" placeholder="Location" name="location" onChange={handleInputChange} value={userFormData.location} required />
                    <Form.Control.Feedback type="invalid">
                        location is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="description">description</Form.Label>
                    <Form.Control type="text" placeholder="Description" name="description" onChange={handleInputChange} value={userFormData.description} required />
                    <Form.Control.Feedback type="invalid">
                        description is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Button 
                    disabled={!(userFormData.organization && userFormData.position && userFormData.startDate && userFormData.endDate && userFormData.location && userFormData.description)}
                    type="submit"
                    variant="success"
                >Submit</Button>

            </Form>
        </>
    )
}

export default ExperienceForm;
