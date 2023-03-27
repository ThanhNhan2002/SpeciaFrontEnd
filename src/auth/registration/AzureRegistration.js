import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

import { Link, useSearchParams } from "react-router-dom";
import React from 'react';
// import { Component }  from 'react';

export default function Registration(props)  {
   
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            <div style={{textAlign: 'center', paddingBottom: '10vh'}}>
                <img width="150px" src='https://specia.ai/wp-content/uploads/2021/11/huge-circle.svg' style={{ borderRadius: '50px', marginTop: '10vh', marginBottom: '5vh' }}/>
                <p style={{fontSize: '1.7rem', fontWeight: '500'}}>Continue with Azure account</p>
                <div style={{textAlign: 'left', width: '30vw', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px'}}>
                    <Form.Group style={{marginBottom: '30px'}} controlId="formBasicEmail">
                        <Form.Control style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px'}} type="email" placeholder="Enter email" value={searchParams.get("account")} disabled />
                    </Form.Group>
                    <Form.Group style={{marginBottom: '30px'}}>
                        <Form.Control style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px'}} type="text" placeholder="Company Name" />
                    </Form.Group>
                    <Form.Group style={{marginBottom: '30px'}}>
                        <Form.Control style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px'}} type="text" placeholder="ABN" />
                    </Form.Group>
                    <Form.Group style={{marginBottom: '30px'}}>
                        <Form.Control style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px'}} type="text" placeholder="Tax Agent Number" />
                    </Form.Group>
                    <Form.Group style={{marginBottom: '30px'}}>
                        <Form.Control style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px'}} type="text" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group style={{marginBottom: '30px'}}>
                        <Form.Control style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px'}} type="text" placeholder="Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check style={{marginTop: '20px'}} type="checkbox" label="By signing up you accept the Term of Service and Privacy Policy" checked/>
                    </Form.Group>
                    <div style={{marginTop: '40px', textAlign: 'center'}}>
                        <Button style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px', marginBottom: '30px', width: '100%'}} variant="primary" type="button">
                            Continue
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}