

import { React, useState } from 'react'
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';




export default ({show, onClose, message, description}) => {
    
    
    return (
        <Modal style={{ backgroundColor: 'rgb(0, 0, 0, 0.4)'}} contentClassName='whiteContentModal' show={show} onHide={onClose} centered>
                <Modal.Header style={{ border: 0, color: '#ee7170', padding: 0}} closeButton>
                </Modal.Header>
                <Modal.Body style={{padding: '10px 30px'}}>
                    <p style={{color: '#ee7170', fontWeight: '500', fontSize: '1.5rem'}} >{message}</p>
                    <Form.Group controlId="formFileLg" className="mb-3">
                        <p style={{fontSize: '1.1rem', fontWeight: '400'}}>{description}</p>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer style={{border: 0, padding: '30px'}}>
                <p style={{ color: '#ee7170', fontWeight: '600', cursor: 'pointer'}} onClick={onClose}>
                    Close
                </p>
                </Modal.Footer>
            </Modal>
            
    )
}