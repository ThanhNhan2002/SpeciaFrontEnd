import Button from 'react-bootstrap/Button';


import { React, useState } from 'react'

import Modal from 'react-bootstrap/Modal';
import CustomerTable from './CustomerTable';
import UploadBulk from './UploadBulk';
import AddUserModal from './AddUserModal';
import AssignmentModal from './AssignmentModal';

import styles from '../DigitalAssistants.module.css'


const dummyData = [

      {id: 1, ABN: '111111111', clientName:'Company 1', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent1@accounting1.com','agent2@accounting1.com', 'agent3@accounting1.com']},
    
      {id: 2, ABN: '111111112', clientName:'Company 2', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent1@accounting1.com', 'agent2@accounting1.com', 'agent4@accounting1.com']},
    
      {id: 3, ABN: '111111113', clientName:'Company 3', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent2@accounting1.com', 'agent3@accounting1.com']},
    
      {id: 4, ABN: '111111114', clientName:'Company 4', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent2@accounting1.com', 'agent5@accounting1.com']},
    
      {id: 5, ABN: '111111115', clientName:'Company 5', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent3@accounting1.com', 'agent4@accounting1.com']},
    
      {id: 6, ABN: '111111116', clientName:'Company 6', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent1@accounting1.com', 'agent3@accounting1.com']},
    
      {id: 7, ABN: '111111117', clientName:'Company 7', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent1@accounting1.com', 'agent4@accounting1.com']},
    
      {id: 8, ABN: '111111118', clientName:'Company 8', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent1@accounting1.com', 'agent5@accounting1.com']},
    
      {id: 9, ABN: '111111119', clientName:'Company 9', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent2@accounting1.com', 'agent3@accounting1.com']}
    
    ]

export default (props) => {

    const [ currentId, setCurrentId ] = useState(0)

    const [ customerData, setCustomerData ] = useState(dummyData)

    const [ emailSent, setEmailSent ] = useState(false)

    const [ currentAssignmentView, setCurrentAssignmentView ] = useState([])

    const [ uploadModalShow, setUploadModalShow ] = useState(false)

    const [ addUserModalShow, setAddUserdModalShow ] = useState(false)

    const [ assignmentModalShow, setAssignmentModalShow ] = useState(false)

    function openUploadModal(){
        setUploadModalShow(true)
    }

    function closeUploadModal(){
        setUploadModalShow(false)
    }

    function sendEmailHandler(){
        setEmailSent(true)
    }

    function confirmUpload(){
        console.log('upload file')
        setUploadModalShow(false)
    }


    function openAddUserModal(){
        setAddUserdModalShow(true)
    }

    function closeAddUserModal(){
        setAddUserdModalShow(false)
    }

    function confirmAddUser(){
        console.log('upload file')
        setAddUserdModalShow(false)
    }


    function openAssignmentModal(id){
        setCurrentId(id)
        setCurrentAssignmentView([...customerData.find(item => item.id == id).taxAgentEmail])
        setAssignmentModalShow(true)
    }

    function closeAssignmentModal(){
        setAssignmentModalShow(false)
    }

    function confirmAssignment(id, newAccountList){
        setCustomerData(oldState => {
            let newState = JSON.parse(JSON.stringify(oldState))
            newState.find(item => item.id == id).taxAgentEmail = newAccountList
            return newState
        })
        setAssignmentModalShow(false)
    }

    function saveTableHandler(){
        console.log('Saving Table ...')
    }

    return (
        <>
            <Modal.Body className={styles.visible} style={{margin: '0px 100px', padding: 0, fontSize: '1.6rem', lineHeight: '2.8rem', borderRadius: '20px'}}>
                <div>
                    <p style={{paddingTop: '50px', fontWeight: '500'}}>Set up ATO Access </p>
                    { !emailSent && <p style={{fontSize: '1.3rem'}}>An email with instructions on how to set up ATO access will be sent to your email address <span style={{color: '#ee7170'}}>tung@spectargroup.com</span></p>}
                    { emailSent && <p style={{fontSize: '1.3rem'}}>An email has been sent to your email address <span style={{color: '#ee7170'}}>tung@spectargroup.com</span>. Please check our mailbox!</p>}
                    <Button onClick={sendEmailHandler} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px', marginTop: '20px'}} variant="primary">
                        { !emailSent && 'Send Email'}{ emailSent && 'Resend Email'}
                    </Button>
                </div>
                <div style={{width: '100%', textAlign: 'left'}}>
                    <p style={{paddingTop: '70px', fontWeight: '500'}}>Manage Customers</p>
                    <p style={{fontSize: '1.3rem'}}>Add a single customer or multiple customers by uploading a CSV file</p>
                    <div style={{display: 'flex', flexDirection: 'row', paddingBottom: '25px', margin: '0 10px'}}>
                        <div style={{flex: 1, textAlign: 'left'}}> 
                            <p onClick={openAddUserModal} style={{color: '#ee7170', cursor: 'pointer', fontSize: '1.1rem', fontWeight: '600', display: 'inline'}}>+ Add a customer</p>
                            <p onClick={openUploadModal} style={{color: '#ee7170', cursor: 'pointer', fontSize: '1.1rem', fontWeight: '600', display: 'inline', marginLeft:'40px'}}>+ Upload bulk customers</p>
                        </div>
                        <div style={{flex: 1, textAlign: 'right'}}> 
                            <p onClick={saveTableHandler} style={{color: '#ee7170', cursor: 'pointer', fontSize: '1.1rem', fontWeight: '600', display: 'inline'}}>Save</p>
                            
                        </div>
                    </div>
                    <div style={{}}>
                        <CustomerTable customerData={customerData} openAssignmentModal={openAssignmentModal}/>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer style={{borderTop: 0, paddingBottom: '50px', paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px'}}>
                <div style={{display: 'flex', flex: 1, textAlign: 'right'}}>
                    <div style={{flex: 1}}>
                        <Button onClick={props.onBack} style={{padding: '15px 35px', borderRadius: '50px'}} variant="outline-primary">
                            Previous Step
                        </Button>
                    {/* </div>
                    <div style={{flex: 1, textAlign: 'right'}}> */}
                        <Button onClick={props.onContinue} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px',marginLeft: '20px'}} variant="primary">
                            Next Step
                        </Button>
                    </div>
                </div>
            </Modal.Footer>


            <UploadBulk uploadModalShow={uploadModalShow} closeUploadModal={closeUploadModal} confirmUpload={confirmUpload}/>


            <AddUserModal addUserModalShow={addUserModalShow} closeAddUserModal={closeAddUserModal} confirmAddUser={confirmAddUser}/>


            <AssignmentModal id={currentId} selectedAccounts={currentAssignmentView} assignmentModalShow={assignmentModalShow} closeAssignmentModal={closeAssignmentModal} confirmAssignment={confirmAssignment}/>
        </>
    )
}