
import { React, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

export default (props) => {

    const [roleTypeCode, setRoleTypeCode] = useState(props.request.taxRoleTypeCode)

    function updateRoleTypeCode(event){

        setRoleTypeCode(event.target.value)
    }

      useEffect(() => {
        props.onUpdateRoleTypeCode(roleTypeCode)
      }, [roleTypeCode]);

    return (
        <>
            <p>Please provide Tax Role Type Code</p>
            <div style={{width: '600px', paddingTop: '20px'}}>
            <Form.Control type="text" style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} value={roleTypeCode} onChange={updateRoleTypeCode} aria-label="Tax Role Type Code" placeholder='Tax Role Type Code'>
            </Form.Control>
            </div>
        </>
    )
}