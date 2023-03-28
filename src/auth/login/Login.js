import React, { useEffect, useState } from "react";

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

import { useNavigate, Link } from "react-router-dom";

import Cookies from 'js-cookie';
import MessageModal from "../../utils/MessageModal";


export default function Login() {

    const naviagte = useNavigate()

    const [ messageShow, setMessageShow ] = useState(false)

    const [ errorMessage, setErrorMessage ] = useState('')

    const [ errorDescription, setErrorDescription ] = useState('')


    const [ email, setEmail ] = useState('')

    const [ passwd, setPasswd ] = useState('')


    const navigate = useNavigate();

    const checkUserToken = () => {
        let token = Cookies.get('IdToken')
        Cookies.IdToken ="atoken"
        if (token){
            return navigate('/');
        }
    }

    function emailChangedHandler(e){
        setEmail(e.target.value)
    }

    function passwdChangedHandler(e){
        setPasswd(e.target.value)
    }
    
    useEffect(() => {
            checkUserToken();
        });

    function handleSubmit(event){
        event.preventDefault();
        event.stopPropagation();

        if(email && passwd && email.includes('@')){
            Cookies.set('IdToken', 'raebrg78reay7ae8grg')
            navigate('/')
        }else{
            setErrorDescription('Your email or password is incorrect. Please try again!')
            setErrorMessage('Incorrect email or password')
            setMessageShow(true)
        }
    }

    function resetPasswdHandler(){
        naviagte('/auth/passwdreset')
    }

    function signInWithAzure(){
        window.location.href = '/api/v1/auth/login';
    }

    return (
        <>
            <div style={{textAlign: 'center'}}>
                <img width="150px" src='https://specia.ai/wp-content/uploads/2021/11/huge-circle.svg' style={{ borderRadius: '50px', marginTop: '7vh', marginBottom: '7vh' }}/>
                <p style={{fontSize: '1.7rem', fontWeight: '500'}}>Welcome back</p>
                <div style={{textAlign: 'left', width: '450px', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px'}}>
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group style={{marginBottom: '30px'}} className="" controlId="formBasicEmail">
                            {/* <Form.Label style={{fontWeight: '700', fontSize: '1.1rem'}}>Email Address</Form.Label> */}
                            <Form.Control onChange={emailChangedHandler} style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px', paddingRight: '20px'}} type="email" placeholder="Email address" value={email}/>
                        </Form.Group>
                        <Form.Group style={{marginBottom: '30px'}} className="" controlId="formBasicPassword">
                            {/* <Form.Label style={{fontWeight: '700', fontSize: '1.1rem'}}>Password</Form.Label> */}
                            <Form.Control onChange={passwdChangedHandler} style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px', paddingRight: '20px'}} type="password" placeholder="Password" value={passwd}/>
                        </Form.Group>
                        <div style={{display: 'flex'}}>
                            <div style={{flex: 1, textAign: 'left'}}>
                                <Form.Group className="">
                                    <Form.Check style={{fontSize: '0.9rem'}} type="checkbox" label="Remember Password" checked/>
                                </Form.Group>
                            </div>
                            <div style={{flex: 1}}>
                                <p onClick={resetPasswdHandler} className="forgotPassword" style={{fontSize: '0.9rem', margin: 0, textAlign: 'right', lineHeight: '1rem', cursor: 'pointer'}}>Forgot your password?</p>
                            </div>
                        </div>
                        <Button style={{marginTop: '40px', padding: '15px 35px', paddingRight: '30px', borderRadius: '50px', marginBottom: '30px', width: '100%'}} variant="primary" type="submit">
                                Sign in
                        </Button>
                    </Form>
                    <div style={{ textAlign: 'center'}}>
                        
                        <p style={{marginBottom: '30px'}}>Don't have an account? <Link to="/auth/register" style={{textDecoration:'none'}}><span style={{fontWeight: '600', color: '#eb5b5b'}}>Create a new account</span></Link></p>
                        <p style={{margin: 0}}>OR</p>
                        <Button onClick={signInWithAzure} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px',marginTop: '30px', width: '100%'}} variant="outline-secondary" type="button">
                            Sign in with your Microsoft Account
                        </Button>
                    </div>
                </div>
            </div>
            <MessageModal show={messageShow} onClose={() => {setMessageShow(false)}} message={errorMessage} description={errorDescription}></MessageModal>
        </>
    )
}