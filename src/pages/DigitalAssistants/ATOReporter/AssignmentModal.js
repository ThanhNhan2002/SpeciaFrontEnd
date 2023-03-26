
import Button from 'react-bootstrap/Button';


import { React, useState } from 'react'
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';

import styles from '../DigitalAssistants.module.css'

const agentAccount = ['agent1@accounting1.com', 'agent2@accounting1.com', 'agent3@accounting1.com', 'agent4@accounting1.com', 'agent4@accounting1.com']


export default ({selectedAccounts, assignmentModalShow, closeAssignmentModal, confirmAssignment}) => {

    

    return (
        <Modal style={{ backgroundColor: 'rgb(0, 0, 0, 0.4)'}} contentClassName={styles.modalContent} show={assignmentModalShow} onHide={closeAssignmentModal} centered>
                <Modal.Header style={{ border: 0, color: '#ee7170', padding: 0}} closeButton>
                </Modal.Header>
                <Modal.Body style={{padding: '10px 50px'}}>
                    <p style={{color: '#ee7170', fontWeight: '500', fontSize: '1.5rem', paddingBottom: '10px'}} >Users Assigned</p>
                    <div>
                        <ul style={{listStyleType: 'none', paddingLeft: 0}}>
                            { agentAccount.map(acc =>
                            <li >
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <Form.Check inline type='checkbox' checked={selectedAccounts.includes(acc)}/>
                                    <p>{acc}</p>
                                </div>
                            </li>
                            )}
                        </ul>
                    </div>

                </Modal.Body>
                <Modal.Footer style={{border: 0, padding: '30px'}}>
                <p style={{ color: '#ee7170', fontWeight: '600', cursor: 'pointer'}} onClick={confirmAssignment}>
                    Save
                </p>
                </Modal.Footer>
        </Modal>
    )
}