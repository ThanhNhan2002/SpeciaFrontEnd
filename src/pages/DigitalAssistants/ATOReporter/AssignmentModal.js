


import Dropdown from 'react-bootstrap/Dropdown';

import { React, useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';

import styles from '../DigitalAssistants.module.css'

const agentAccount = ['agent1@accounting1.com', 'agent2@accounting1.com', 'agent3@accounting1.com', 'agent4@accounting1.com', 'agent5@accounting1.com', 'agent6@accounting1.com']



export default ({id, selectedAccounts, assignmentModalShow, closeAssignmentModal, confirmAssignment}) => {

    const [ accountsChecked, setAccountChecked ] = useState(selectedAccounts)

    function statusChangedHandler(e, acc){
        if(e.target.checked){
            setAccountChecked(oldState => [...oldState, acc])
        }else{
            setAccountChecked(oldState => oldState.filter(item => item != acc))
        }
    }

    useEffect(() => {
       setAccountChecked(selectedAccounts)
    }, [selectedAccounts]);



    return (
        <Modal style={{ backgroundColor: 'rgb(0, 0, 0, 0.4)'}} contentClassName={styles.modalContent} show={assignmentModalShow} onHide={closeAssignmentModal} centered>
                <Modal.Header style={{ border: 0, color: '#ee7170', padding: 0}} closeButton>
                </Modal.Header>
                <Modal.Body style={{padding: '10px 30px'}}>
                    <p style={{color: '#ee7170', fontWeight: '500', fontSize: '1.5rem', paddingBottom: '10px'}} >Users Assigned</p>
                    <p style={{paddingBottom: '10px'}}>Only these users can manage this customer</p>
                    <div>

                        { accountsChecked.map(acc =>
                            <img width="40px" src={require('../../../resources/UserAvatar.png')} style={{ border: "1px solid #ee7170", borderRadius: '50px', padding: '1px' , marginRight:'10px'}} alt="User avatar"/>
                        )}
                        
                        <Dropdown style={{marginTop: '30px'}}>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{padding: '10px 30px', borderRadius: '30px'}}>
                            {accountsChecked.length} Users selected
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{padding: '10px 20px', maxHeight: '200px', overflowY: 'scroll', borderRadius: '20px'}}>
                            { agentAccount.map(acc =>
                                // <Dropdown.Item>
                                    <div style={{display: 'flex', flexDirection: 'row', padding: '10px'}}>
                                        <Form.Check onChange={(e) => statusChangedHandler(e, acc)} inline type='checkbox' checked={accountsChecked.includes(acc)}/>
                                        <p style={{margin: 0}}>{acc}</p>
                                    </div>
                                // </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </Modal.Body>
                <Modal.Footer style={{border: 0, paddingBottom: '30px', paddingLeft: '30px', paddingRight: '30px'}}>
                <p style={{ color: '#ee7170', fontWeight: '600', cursor: 'pointer'}} onClick={confirmAssignment.bind(this, id, accountsChecked)}>
                    Save
                </p>
                </Modal.Footer>
        </Modal>
    )
}