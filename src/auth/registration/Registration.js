import Form from 'react-bootstrap/Form';
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';

import { useNavigate, Link } from "react-router-dom";
import React , { useState } from 'react';
import MessageModal from "../../utils/MessageModal";



// import { Component }  from 'react';

export default function Registration()  {
    // function signInWithAzure(){
    //     window.location.href = '/api/v1/auth/login';
    // }


    const [ email, setEmail ] = useState('')

    const [ passwd, setPasswd ] = useState('')

    const [ companyName, setCompanyName ] = useState('')

    const [ adminEmail, setAdminEmail ] = useState('')

    const [ ABN, setABN ] = useState('')

    const [ TAN, setTAN ] = useState('')

    const [ phone, setPhone ] = useState('')

    const [ address, setAddress ] = useState('')

    const [ errorDescription, setErrorDescription ] = useState('')
    const [ messageShow, setMessageShow ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')

    const navigate = useNavigate();


    function emailChangedHandler(e){
        setEmail(e.target.value)
    }

    function passwdChangedHandler(e){
        setPasswd(e.target.value)
    }

    function companyNameChangedHandler(e){
        setCompanyName(e.target.value)
    }

    function adminEmailChangedHandler(e){
        setAdminEmail(e.target.value)
    }

    function ABNchangedHandler(e){
        setABN(e.target.value)
    }

    function TANchangedHandler(e){
        setTAN(e.target.value)
    }

    function phoneChangedHandler(e){
        setPhone(e.target.value)
    }

    function addressChangedHandler(e){
        setAddress(e.target.value)
    }

    function isValidEmail(email) {
        if(email && email.includes('@')){
            //do nothing
        }else{
            setErrorDescription('Your email or password is incorrect. Please try again!')
            setErrorMessage('Incorrect email or password')
            setMessageShow(true)
            return 
        }

    }

    function handleSubmit(event){
        event.preventDefault();
        event.stopPropagation();

        if(email && email.includes('@')){
            //do nothing
        }else{
            setErrorDescription('Your email or password is incorrect. Please try again!')
            setErrorMessage('Incorrect email or password')
            setMessageShow(true)
            return 
        }

        if(!isValidEmail) {
            return 
        }

        if(email && email.includes('@')){
            //do nothing
        }else{
            setErrorDescription('Your email or password is incorrect. Please try again!')
            setErrorMessage('Incorrect email or password')
            setMessageShow(true)
            return 
        }

        console.log(email);
        console.log(passwd);
        console.log(companyName);
        console.log(adminEmail);
        console.log(ABN);
        console.log(TAN);
        console.log(phone);
        console.log(address);
    }


    return (
        <>
            <div style={{textAlign: 'center', paddingBottom: '10vh'}}>
                <img width="150px" src='https://specia.ai/wp-content/uploads/2021/11/huge-circle.svg' style={{ borderRadius: '50px', marginTop: '7vh', marginBottom: '7vh' }}/>
                <p style={{fontSize: '1.7rem', fontWeight: '500'}}>Create a new account</p>
                <div style={{textAlign: 'left', width: '30vw', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px'}}>
                    <Form.Group style={{marginBottom: '30px'}} controlId="formBasicEmail">
                        <Form.Control style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px'}} type="email" placeholder="Email Address" value={email} onChange={emailChangedHandler} />
                    </Form.Group>
                    <Form.Group style={{marginBottom: '30px'}} controlId="formBasicPassword">
                        <Form.Control style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px'}} type="password" placeholder="Password" value={passwd} onChange={passwdChangedHandler} />
                    </Form.Group>
                    <Form.Group style={{marginBottom: '30px'}}>
                        <Form.Control style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px'}} type="text" placeholder="Company Name" value={companyName} onChange={companyNameChangedHandler} />
                    </Form.Group>
                    <Form.Group style={{marginBottom: '30px'}}>
                        <Form.Control style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px'}} type="text" placeholder="Admin Email" value={adminEmail} onChange={adminEmailChangedHandler} />
                    </Form.Group>
                    <Form.Group style={{marginBottom: '30px'}}>
                        <Form.Control style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px'}} type="text" placeholder="ABN" value={ABN} onChange={ABNchangedHandler}/>
                    </Form.Group>
                    <Form.Group style={{marginBottom: '30px'}}>
                        <Form.Control style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px'}} type="text" placeholder="Tax Agent Number" value={TAN} onChange={TANchangedHandler}/>
                    </Form.Group>
                    <Form.Group style={{marginBottom: '30px'}}>
                        <Form.Control style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px'}} type="text" placeholder="Phone Number" value={phone} onChange={phoneChangedHandler}/>
                    </Form.Group>
                    <Form.Group style={{marginBottom: '30px'}}>
                        <Form.Control style={{height: '55px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1rem', paddingLeft: '20px'}} type="text" placeholder="Address" value={address} onChange={addressChangedHandler}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check style={{marginTop: '20px'}} type="checkbox" label="By signing up you accept the Term of Service and Privacy Policy" checked/>
                    </Form.Group>
                    <div style={{marginTop: '40px', textAlign: 'center'}}>
                        <Button onClick={handleSubmit} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px', marginBottom: '30px', width: '100%'}} variant="primary" type="button">
                            Sign up
                        </Button>
                        <p>Already have an account? <Link style={{textDecoration:'none'}} to="/auth/login"><span style={{fontWeight: '600', color: '#eb5b5b'}}>Sign in</span></Link></p>
                    </div>
                </div>
            </div>
            <MessageModal show={messageShow} onClose={() => {setMessageShow(false)}} message={errorMessage} description={errorDescription}></MessageModal>
        </>
    )
}