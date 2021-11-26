import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const SignUpForm = () => {
    const [userFormData, setUserFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [addProfile, { error }] = useMutation(ADD_PROFILE);

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
            event.preventDefault()
            event.preventPropagation()
        }

        try {
            const { data } = await addProfile({
                variables: { ...userFormData },
            });

            console.log(data);
            Auth.login(data.addProfile.token)
        } catch (error) {
            console.error(error)
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    }

    return (
        <div class="container" style= {{
            position: 'absolute', top: '30%', 
        }}>
            {/* This is needed for the validation functionality above */}
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                {/* show alert if server response is bad */}
                <Alert
                dismissible
                onClose={() => setShowAlert(false)}
                show={showAlert}
                variant="danger"
                >
                Something went wrong with your signup!
                </Alert>

                <Form.Group>
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Your username"
                    name="username"
                    onChange={handleInputChange}
                    value={userFormData.username}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Username is required!
                </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Your email address"
                    name="email"
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Email is required!
                </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Your password"
                    name="password"
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Password is required!
                </Form.Control.Feedback>
                </Form.Group>
                <Button
                disabled={
                    !(
                    userFormData.username &&
                    userFormData.email &&
                    userFormData.password
                    )
                }
                type="submit"
                variant="success"
                >
                Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignUpForm;