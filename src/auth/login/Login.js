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
            <div style={{textAlign: 'center'}}>
                <img width="150px" src='https://specia.ai/wp-content/uploads/2021/11/huge-circle.svg' style={{ borderRadius: '50px', marginTop: '10vh', marginBottom: '5vh' }}/>
                <p style={{fontSize: '1.7rem', fontWeight: '500'}}>Welcome back</p>
                <div style={{textAlign: 'left', width: '450px', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px'}}>
                    <Form.Group style={{marginBottom: '30px'}} className="" controlId="formBasicEmail">
                        {/* <Form.Label style={{fontWeight: '700', fontSize: '1.1rem'}}>Email Address</Form.Label> */}
                        <Form.Control style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px'}} type="email" placeholder="Email address" />
                    </Form.Group>
                    <Form.Group style={{marginBottom: '30px'}} className="" controlId="formBasicPassword">
                        {/* <Form.Label style={{fontWeight: '700', fontSize: '1.1rem'}}>Password</Form.Label> */}
                        <Form.Control style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px'}} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="" controlId="formBasicCheckbox">
                        <Form.Check style={{marginTop: '20px', fontSize: '0.9rem'}} type="checkbox" label="Remember Password" checked/>
                    </Form.Group>
                    <div style={{marginTop: '40px', textAlign: 'center'}}>
                        <Button style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px', marginBottom: '30px', width: '100%'}} variant="primary" type="button">
                            Sign in
                        </Button>
                        <p style={{marginBottom: '30px'}}>Don't have an account? <Link to="/auth/register" style={{textDecoration:'none'}}><span style={{fontWeight: '600', color: '#eb5b5b'}}>Create a new account</span></Link></p>
                        <p style={{margin: 0}}>OR</p>
                        <Button onClick={signInWithAzure} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px',marginTop: '30px', width: '100%'}} variant="outline-secondary" type="button">
                            Sign in with your Microsoft Account
                        </Button>
    
                    </div>
                </div>
            </div>
        </>
    )
}