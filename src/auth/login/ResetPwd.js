import React, { useEffect, useState } from "react";

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

import { useNavigate, Link } from "react-router-dom";

import Cookies from 'js-cookie';


export default function Login() {


    const [ email, setEmail ] = useState('')


    function emailChangedHandler(e){
        setEmail(e.target.value)
    }
    

    function handleSubmit(event){
        event.preventDefault();
        event.stopPropagation();

        if(email && email.includes('@')){
            console.log(email)
        }
    }

    return (
        <>
            <div style={{textAlign: 'center'}}>
                <img width="150px" src='https://specia.ai/wp-content/uploads/2021/11/huge-circle.svg' style={{ borderRadius: '50px', marginTop: '7vh', marginBottom: '7vh' }}/>
                <p style={{fontSize: '1.7rem', fontWeight: '500'}}>Reset your password</p>
                <div style={{textAlign: 'left', width: '450px', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px'}}>
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group style={{marginBottom: '30px'}} className="" controlId="formBasicEmail">
                            {/* <Form.Label style={{fontWeight: '700', fontSize: '1.1rem'}}>Email Address</Form.Label> */}
                            <Form.Control onChange={emailChangedHandler} style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px', paddingRight: '20px'}} type="email" placeholder="Email address" value={email}/>
                        </Form.Group>
                        <Button style={{marginTop: '40px', padding: '15px 35px', paddingRight: '30px', borderRadius: '50px', marginBottom: '30px', width: '100%'}} variant="primary" type="submit">
                                Send Confirmation Email
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}