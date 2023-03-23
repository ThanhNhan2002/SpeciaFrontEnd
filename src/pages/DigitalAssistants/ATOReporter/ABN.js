
import { React, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

export default (props) => {

    const [abn, setAbn] = useState(props.request.ABN)

    function updateAbn(event){

        setAbn(event.target.value)
    }

      useEffect(() => {
        props.onUpdateAbn(abn)
      }, [abn]);

    return (
        <>
            <Modal.Body style={{margin: '50px 50px', fontSize: '1.6rem', lineHeight: '2.8rem'}}>
                <p>Please provide your Australian Business Number - ABN</p>
                <div style={{width: '600px', paddingTop: '20px'}}>
                <Form.Control type="text" style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} value={abn} onChange={updateAbn} aria-label="ABN" placeholder='ABN'>
                </Form.Control>
                </div>
            </Modal.Body>
            <Modal.Footer style={{borderTop: 0, marginBottom: '15px', marginLeft: '15px', marginRight: '15px'}}>
                <div style={{display: 'flex', flex: 1}}>
                <div style={{flex: 1}}>
                        <Button onClick={props.onBack} style={{padding: '15px 35px', borderRadius: '50px'}} variant="outline-primary">
                            Previous Step
                        </Button>
                    </div>
                    <div style={{flex: 1, textAlign: 'right'}}>
                        <Button onClick={props.onContinue} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="primary">
                            Next Step
                        </Button>
                    </div>
                </div>
            </Modal.Footer>
        </>
    )
}