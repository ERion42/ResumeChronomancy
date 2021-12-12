import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_USER_INFOS } from '../../utils/mutations';
import decode from 'jwt-decode'
import Auth from '../../utils/auth';

const UserInfoForm = () => {
    const [userFormData, setUserFormData] = useState({ firstName: '', lastName: '', address: '', phoneNumber: '', email: '' });
    
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [addUserInfos, { error }] = useMutation(ADD_USER_INFOS);
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
        
        if (!token) {
            return false;
        }
        
        const decoded = decode(token)
        const owner = decoded.data._id;
        console.log(owner)

        try {
            const { data } = await addUserInfos({
                variables: { ...userFormData, owner },
        });

            console.log(data);
            
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setUserFormData({
            firstName: '', 
            lastName: '',
            address: '', 
            phoneNumber: '', 
            email: '' 
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
                    <Form.Label htmlFor="firstName">First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" name="firstName" onChange={handleInputChange} value={userFormData.firstName} required />
                    <Form.Control.Feedback type="invalid">
                        First Name is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="lastName">Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" name="lastName" onChange={handleInputChange} value={userFormData.lastName} required />
                    <Form.Control.Feedback type="invalid">
                        Last Name is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="address">Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" name="address" onChange={handleInputChange} value={userFormData.address} required />
                    <Form.Control.Feedback type="invalid">
                        Address is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Phone Number" name="phoneNumber" onChange={handleInputChange} value={userFormData.phoneNumber} required />
                    <Form.Control.Feedback type="invalid">
                        Phone Number is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" name="email" onChange={handleInputChange} value={userFormData.email} required />
                    <Form.Control.Feedback type="invalid">
                        Email is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <br />

                <Button 
                    disabled={!(userFormData.firstName && userFormData.lastName && userFormData.address && userFormData.phoneNumber && userFormData.email)}
                    type="submit"
                    variant="success"
                    className='offset-md-5'
                >Submit</Button>

            </Form>
        </>
    )
}

export default UserInfoForm;