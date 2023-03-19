import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";
import React from 'react';
// import { Component }  from 'react';

export default function Registration()  {
    // function signInWithAzure(){
    //     window.location.href = '/api/v1/auth/login';
    // }

    return (
        <>
            <div style={{textAlign: 'center', marginTop: '15vh'}}>
                <p style={{fontSize: '2.5rem'}}>Registration</p>
                <div style={{textAlign: 'left', width: '30vw', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px'}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control style={{height: '50px'}} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control style={{height: '50px'}} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control style={{height: '50px'}} type="text" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check style={{marginTop: '20px'}} type="checkbox" label="By signing up you accept the Term of Service and Privacy Policy" />
                    </Form.Group>
                    <div style={{marginTop: '40px', textAlign: 'center'}}>
                        <Button style={{width: '100%', marginBottom: '30px', height: '50px'}} variant="secondary" type="button">
                            Sign up
                        </Button>
                        <p>Already have an account? <Link to="/auth/login"><span style={{fontWeight: '600'}}>Sign in</span></Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}