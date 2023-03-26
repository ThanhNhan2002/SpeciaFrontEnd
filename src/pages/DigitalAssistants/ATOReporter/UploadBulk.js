
import Button from 'react-bootstrap/Button';


import { React, useState } from 'react'
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';

import styles from '../DigitalAssistants.module.css'

export default ({uploadModalShow, closeUploadModal, confirmUpload}) => {
    
    
    return (
        <Modal style={{ backgroundColor: 'rgb(0, 0, 0, 0.4)'}} contentClassName={styles.modalContent} show={uploadModalShow} onHide={closeUploadModal} centered>
                <Modal.Header style={{ border: 0, color: '#ee7170', padding: 0}} closeButton>
                </Modal.Header>
                <Modal.Body style={{padding: '10px 30px'}}>
                    <p style={{color: '#ee7170', fontWeight: '500', fontSize: '1.5rem'}} >Upload Bulk Customers</p>
                    <Form.Group controlId="formFileLg" className="mb-3">
                        <p style={{fontSize: '1.1rem', fontWeight: '500'}}>Instructions</p>
                        <p>1. Fill in the CSV template</p>
                        <p style={{fontSize: '0.9rem', fontWeight: '600', color: '#ee7170', cursor: 'pointer'}}>Download template</p>

                        <Form.Label style={{marginBottom: '20px'}}>2. Upload the CSV template</Form.Label>
                        <div class="">
                            {/* <form method="post" action="#" id="#"> */}
                            
                                
                                
                                
                                <div class="form-group files">
                                    <input type="file" class="form-control" multiple=""/>
                                </div>
                                
                                
                            {/* </form> */}
                            
                            
                        </div>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer style={{border: 0, padding: '30px'}}>
                <p style={{ color: '#ee7170', fontWeight: '600', cursor: 'pointer'}} onClick={confirmUpload}>
                    Upload
                </p>
                </Modal.Footer>
            </Modal>
            
    )
}