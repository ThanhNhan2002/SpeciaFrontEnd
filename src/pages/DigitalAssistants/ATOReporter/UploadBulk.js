
import Button from 'react-bootstrap/Button';

import fileDownload from 'js-file-download'

import { React, useState } from 'react'
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';

import styles from '../DigitalAssistants.module.css'

import axios from 'axios';



export default ({uploadModalShow, closeUploadModal, confirmUpload}) => {
    
    
    return (
        <Modal style={{ backgroundColor: 'rgb(0, 0, 0, 0.4)'}} contentClassName={styles.modalContent} show={uploadModalShow} onHide={closeUploadModal} centered>
                <Modal.Header style={{ border: 0, color: '#ee7170', padding: 0}} closeButton>
                </Modal.Header>
                <Modal.Body style={{padding: '10px 30px'}}>
                    <p style={{color: '#ee7170', fontWeight: '500', fontSize: '1.5rem'}} >Upload Bulk Customers</p>
                    <Form.Group controlId="formFileLg" className="mb-3">
                        <p style={{fontSize: '1.1rem', fontWeight: '500'}}>Instructions</p>
                        <p style={{marginBottom: 0}}>1. Fill in the CSV template</p>
                        <div style={{padding: '10px 0'}}>
                            <a style={{fontSize: '0.9rem', fontWeight: '600', color: '#ee7170', cursor: 'pointer', textDecoration: 'none'}} href="/static/media/CustomerTemplate.1ace4f28a6d727d91f84.xlsx" download={'CustomerTemplate.xlsx'}>Download template</a>
                        </div>

                        <Form.Label style={{marginBottom: '20px'}}>2. Upload the CSV template</Form.Label>
                        <div class="">

                                <div class="form-group files">
                                    <input type="file" class="form-control" multiple="" accept=".xls,.xlsx,.csv"/>
                                </div>
  
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