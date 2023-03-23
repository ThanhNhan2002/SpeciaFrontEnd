
import { React, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

export default (props) => {

    const [accountIdentifier, setAccountIdentifier] = useState(props.request.taxAccountIdentifier)

    const [ isRBA, setIsRBA ] = useState(props.request.runningBalanceIndicator)

    function updateAccountIdentifier(event){

        setAccountIdentifier(event.target.value)
    }

    function updateRBA(event){
        setIsRBA(event.target.checked)
    }

    useEffect(() => {
    props.onUpdateAccountIdentifier(accountIdentifier)
    }, [accountIdentifier]);

    useEffect(() => {
        props.onUpdateRBA(isRBA)
        }, [isRBA]);

    return (
        <>
            <p>Please provide Tax Account identifier</p>
            <div style={{width: '600px', paddingTop: '20px'}}>
            <Form.Control type="text" style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} value={accountIdentifier} onChange={updateAccountIdentifier} aria-label="Tax Account Identifier" placeholder='Tax Account Identifier'>
            </Form.Control>
            <br/>
            <Form.Check onChange={updateRBA} inline type='checkbox' checked={isRBA}/>
            <p>Account is a Running Balance Account - RBA</p>
            </div>
        </>
    )
}