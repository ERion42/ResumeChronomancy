import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_EDUCATION } from '../../utils/mutations';
import decode from 'jwt-decode';

import Auth from '../../utils/auth';

const EducationForm = () => {
    const [userFormData, setUserFormData] = useState({ school: '', degree: '', major: '', gpa: '', graduationDate: '', certifications: '' });
    // const [owner, setOwner] = useState({});
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
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        const token = Auth.loggedIn() ? Auth.getToken() : null;
        const decoded = decode(token)
        console.log(decoded)
        const owner = decoded.data._id
        console.log(owner)
      
        if(!token) {
            return false;
        }

        try {
            
            const { data } = await addEducation({
                variables: { ...userFormData, owner },
            });
            console.log(data)
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setUserFormData({
            school: '', 
            degree: '', 
            major: '',
            gpa: '', 
            graduationDate: '',
            certifications: ''
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
                        <Form.Label htmlFor="school">School</Form.Label>
                        <Form.Control type="text" placeholder="Your Alma Mater" name="school" onChange={handleInputChange} value={userFormData.school} required />
                        <Form.Control.Feedback type="invalid">
                            School is required!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className ="padding" htmlFor="degree">Degree</Form.Label>
                        <Form.Control type="text" placeholder="Your Degree" name="degree" onChange={handleInputChange} value={userFormData.degree} required />
                        <Form.Control.Feedback type="invalid">
                            Degree is required!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className ="padding" htmlFor="major">Major</Form.Label>
                        <Form.Control type="text" placeholder="Your Major" name="major" onChange={handleInputChange} value={userFormData.major} required />
                        <Form.Control.Feedback type="invalid">
                            major is required!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className ="padding" htmlFor="gpa">GPA</Form.Label>
                        <Form.Control type="text" placeholder="Your Gpa" name="gpa" onChange={handleInputChange} value={userFormData.gpa} required />
                        <Form.Control.Feedback type="invalid">
                            gpa is required!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className ="padding" htmlFor="graduationDate">Graduation Date</Form.Label>
                        <Form.Control type="text" placeholder="Your Grad Date" name="graduationDate" onChange={handleInputChange} value={userFormData.graduationDate} required />
                        <Form.Control.Feedback type="invalid">
                            graduationDate is required!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className ="padding" htmlFor="certifications">Certifications</Form.Label>
                        <Form.Control type="text" placeholder="Your Certs" name="certifications" onChange={handleInputChange} value={userFormData.certifications} required />
                        <Form.Control.Feedback type="invalid">
                            certifications is required!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <div class="container">
                       <div class="row">
                            <div class="col"> 
                                <Button 
                                    className="padding mb-2 bg-dark btn-outline-dark w-100 align-center text-white"
                                    disabled={!(userFormData.school && userFormData.degree && userFormData.major && userFormData.graduationDate)}
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

export default EducationForm;