


import { React, useState } from 'react'

import Modal from 'react-bootstrap/Modal';

import styles from '../DigitalAssistants.module.css'

export default (props) => {
    return (
        <Modal style={{ backgroundColor: 'rgb(0, 0, 0, 0.4)'}} contentClassName={styles.modalContent} show={props.show} onHide={props.onClose} centered>
                <Modal.Body style={{padding: '10px 30px', textAlign: 'center', marginTop: '20px'}}>
                    <p style={{color: '#ee7170', fontWeight: '500', fontSize: '1.4rem'}}>A email has been sent to your email address</p>
                    <p>emailid@edomain.com</p>
                </Modal.Body>
                <Modal.Footer style={{border: 0, padding: '30px'}}>
                <p style={{ color: '#ee7170', fontWeight: '600', cursor: 'pointer'}} onClick={props.onClose}>
                    Close
                </p>
                </Modal.Footer>
            </Modal>
    )
}