import React, { useEffect } from "react";

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

import { useNavigate, Link } from "react-router-dom";

import Cookies from 'js-cookie';


export default function Login() {
    const navigate = useNavigate();
    const checkUserToken = () => {
        let token = Cookies.get('IdToken')
        Cookies.IdToken ="atoken"
        if (token){
            return navigate('/');
        }
    }
    
    useEffect(() => {
            checkUserToken();
        });

    function signInWithAzure(){
        window.location.href = '/api/v1/auth/login';
    }

    return (
        <>
            <div style={{textAlign: 'center', marginTop: '15vh'}}>
                <p style={{fontSize: '2.5rem'}}>Sign In</p>
                <div style={{textAlign: 'left', width: '30vw', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px'}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control style={{height: '50px'}} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control style={{height: '50px'}} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check style={{marginTop: '20px'}} type="checkbox" label="Remember Password" />
                    </Form.Group>
                    <div style={{marginTop: '40px', textAlign: 'center'}}>
                        <Button style={{width: '100%', marginBottom: '30px', height: '50px'}} variant="secondary" type="button">
                            Sign in
                        </Button>
                        <p style={{margin: 0}}>OR</p>
                        <Button onClick={signInWithAzure} style={{width: '100%', marginTop: '30px', height: '50px'}} variant="primary" type="button">
                            Sign in with Microsoft Account
                        </Button>
                        <p style={{marginTop: '30px'}}>Don't have an account? <Link to="/auth/register"><span style={{fontWeight: '600'}}>Create a new account</span></Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}