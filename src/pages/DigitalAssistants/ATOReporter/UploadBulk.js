
import Button from 'react-bootstrap/Button';


import { React, useState } from 'react'
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';

export default ({uploadModalShow, closeUploadModal, confirmUpload}) => {
    
    
    return (
        <Modal style={{}} show={uploadModalShow} onHide={closeUploadModal} centered>
                <Modal.Header style={{backgroundColor: 'rgb(40, 40, 40)', border: 0}} closeButton>
                <Modal.Title>Upload Bulk Customers</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: 'rgb(40, 40, 40)'}}>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Please select a CSV file</Form.Label>
                    <br/>
                    <Form.Control type="file" style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} />
                </Form.Group>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor: 'rgb(40, 40, 40)', border: 0, padding: '20px'}}>
                <Button style={{borderRadius: '50px', padding: '15px 30px'}} variant="outline-primary" onClick={closeUploadModal}>
                    Cancel
                </Button>
                <Button style={{borderRadius: '50px', padding: '15px 30px'}} variant="primary" onClick={confirmUpload}>
                    Upload
                </Button>
                </Modal.Footer>
            </Modal>
    )
}