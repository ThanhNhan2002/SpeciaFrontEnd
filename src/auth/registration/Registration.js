import Form from 'react-bootstrap/Form';
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';

import { useNavigate, Link } from "react-router-dom";
import React , { useState } from 'react';
import MessageModal from "../../utils/MessageModal";
import passwordValidator from  'password-validator';
import validator from 'validator';



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

    const [submittedDescription,setSubmittedDescription] = useState('')
    const [ submittedShow, setSubmittedShow] = useState(false)
    const [ submittedMessage, setSubmittedMessage ] = useState('')

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
        // if(email && email.includes('@')){
        //     console.log(`Valid email: ${email}`)
        //     return true
        // }else{
        //     setErrorDescription('Your email is incorrect. Please try again!')
        //     setErrorMessage('Incorrect email')
        //     setMessageShow(true)
        //     return false
        // }

        if(!email) {
            setErrorDescription('Please enter an email')
            setErrorMessage('Invalid email')
            setMessageShow(true)
            return false
        }

        const result = validator.isEmail(email+'');
        if(result === true) {
            console.log(`Valid email: ${email}`)
            return true
        } else {
            setErrorDescription('Please enter a valid email')
            setErrorMessage('Invalid email')
            setMessageShow(true)
            return false
        }
    }

    function isValidPassword(password) {
        let passwordSchema = new passwordValidator();
        passwordSchema
        .is().min(8)                                    // Minimum length 8
        .is().max(100)                                  // Maximum length 100
        .has().uppercase()                              // Must have uppercase letters
        .has().lowercase()                              // Must have lowercase letter
        .has().digits(1)                                // Must have 1 digit
        .has().not().spaces()                           // Must not have any space
        .is().not().oneOf(['123456', 'Passw0rd', 'Password123'])   //Password blacklist
        .has(/[!@#$%^&*]/g, 'The string must have at least 1 special character: !@#$%^&*') // Must have at least 1 special character !@#$%^&*

        if(!password) {
            setErrorDescription('Please enter password')
            setErrorMessage('Invalid password')
            setMessageShow(true)
            return false
        }

        const result = passwordSchema.validate(password, { details: true });
        if(result.length === 0){
            console.log(`Valid password: ${password}`)
            return true
        } else {
            setErrorDescription(result[0].message)
            setErrorMessage('Invalid password')
            setMessageShow(true)
            return false
        }
    }

    function isValidCompanyName (companyName) {
        if(!companyName) {
            setErrorDescription('Please enter company name')
            setErrorMessage('Invalid company name')
            setMessageShow(true)
            return false
        } else {
            console.log(`Valid company: ${companyName}`)
            return true;
        }
    }

    function isValidAdminEmail(adminEmail) {
        if(!adminEmail) {
            setErrorDescription('Please enter admin email')
            setErrorMessage('Invalid admin email')
            setMessageShow(true)
            return false
        }

        const result = validator.isEmail(adminEmail+'');
        if(result === true) {
            console.log(`Valid admin email: ${adminEmail}`)
            return true
        } else {
            setErrorDescription('Please enter a valid email')
            setErrorMessage('Invalid admin email')
            setMessageShow(true)
            return false
        }
    }

    function isValidABN (ABN) {
        if(!ABN) {
            setErrorDescription('Please enter ABN')
            setErrorMessage('Invalid ABN')
            setMessageShow(true)
            return false
        }
        
        const result = validator.isNumeric(ABN) && ABN.length === 11;
        if(result) {
            console.log(`Valid ABN: ${ABN}`)
            return true
        } else {
            setErrorDescription('Please enter a valid 11-digit ABN')
            setErrorMessage('Invalid ABN')
            setMessageShow(true)
            return false
        }
    }

    function isValidTAN (TAN) {
        if(!TAN) {
            setErrorDescription('Please enter TAN')
            setErrorMessage('Invalid TAN')
            setMessageShow(true)
            return false
        }
        
        const result = validator.isNumeric(TAN);
        if(result) {
            console.log(`Valid TAN: ${TAN}`)
            return true
        } else {
            setErrorDescription(`Please enter a valid TAN`)
            setErrorMessage('Invalid TAN')
            setMessageShow(true)
            return false
        }
    }

    function isValidPhone (phone) {
        if(!phone) {
            setErrorDescription(`Please enter phone number`)
            setErrorMessage('Invalid phone number')
            setMessageShow(true)
            return false
        }
        
        const result = validator.isMobilePhone(phone);
        if(result) {
            console.log(`Valid phone:  ${phone}`)
            return true
        } else {
            setErrorDescription('Please enter a valid phone number')
            setErrorMessage('Invalid phone number')
            setMessageShow(true)
            return false
        }
    }

    function isValidAddress (address) {
        if(!address) {
            setErrorDescription('Please enter an address')
            setErrorMessage('Invalid phone address')
            setMessageShow(true)
            return false
        }
        console.log(`Valid address: : ${address}`)
        return true
    }
    
    function handleSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        
        if(!isValidEmail(email)) {
            return false;
        }

        if(!isValidPassword(passwd)) {
            return false;
        }

        if(!isValidCompanyName(companyName))  {
            return false;
        }

        if(!isValidAdminEmail(adminEmail))  {
            return false;
        }  

        if(!isValidABN(ABN))  {
            return false;
        }  

        if(!isValidTAN(TAN))  {
            return false;
        }  

        if(!isValidPhone(phone)) {
            return false;
        }
        
        if(!isValidAddress(address)) {
            return false;
        }

        const submitObject = {};
        submitObject.email = email;
        submitObject.password = passwd;
        submitObject.companyName = companyName;
        submitObject.adminEmail = adminEmail;
        submitObject.ABN = ABN;
        submitObject.TAN = TAN;
        submitObject.phone = phone;
        submitObject.address = address;
        console.log(`submit object: ${JSON.stringify(submitObject)}`);

        setSubmittedMessage('Form submitted');
        setSubmittedShow(true);
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
            <div>
            <MessageModal show={submittedShow} onClose={() => {setSubmittedShow(false)}} message={submittedMessage} description={submittedDescription}></MessageModal>
            </div>
        </>
    )
}