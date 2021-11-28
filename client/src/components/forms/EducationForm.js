import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_EDUCATION } from '../../utils/mutations';

import Auth from '../../utils/auth';

const EducationForm = () => {
    const [userFormData, setUserFormData] = useState({ school: '', degree: '', major: '', graduationDate: '' });

    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [addEducation, { error }] = useMutation(ADD_EDUCATION);

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
        console.log(form)
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await addEducation({
                variables: { educationData: { ...userFormData } },
        });

            console.log(data.variables);

        } catch (e) {
            console.error(e);
        }

        // clear form values
        setUserFormData({
            school: '', 
            degree: '', 
            major: '', 
            graduationDate: ''
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
                    <Form.Label htmlFor="school">School</Form.Label>
                    <Form.Control type="text" placeholder="Your Alma Mater" name="school" onChange={handleInputChange} value={userFormData.school} required />
                    <Form.Control.Feedback type="invalid">
                        School is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="degree">degree</Form.Label>
                    <Form.Control type="text" placeholder="Your Alma Mater" name="degree" onChange={handleInputChange} value={userFormData.degree} required />
                    <Form.Control.Feedback type="invalid">
                        Degree is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="major">major</Form.Label>
                    <Form.Control type="text" placeholder="Your Alma Mater" name="major" onChange={handleInputChange} value={userFormData.major} required />
                    <Form.Control.Feedback type="invalid">
                        major is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="graduationDate">graduationDate</Form.Label>
                    <Form.Control type="text" placeholder="Your Alma Mater" name="graduationDate" onChange={handleInputChange} value={userFormData.graduationDate} required />
                    <Form.Control.Feedback type="invalid">
                        graduationDate is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Button 
                    disabled={!(userFormData.school && userFormData.degree && userFormData.major && userFormData.graduationDate)}
                    type="submit"
                    variant="success"
                >Submit</Button>

            </Form>
        </>
    )
}

export default EducationForm;