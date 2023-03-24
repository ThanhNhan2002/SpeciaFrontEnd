import Button from 'react-bootstrap/Button';


import { React, useState } from 'react'
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';
import CustomerTable from './CustomerTable';
import UploadBulk from './UploadBulk';
import AddUserModal from './AddUserModal';


const dummyData = [

      {id: 1, ABN: '111111111', clientName:'Company 1', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent1@accounting1.com','agent2@accounting1.com', 'agent3@accounting1.com']},
    
      {id: 2, ABN: '111111112', clientName:'Company 2', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent1@accounting1.com', 'agent2@accounting1.com', 'agent3@accounting1.com']},
    
      {id: 3, ABN: '111111113', clientName:'Company 3', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent2@accounting1.com', 'agent3@accounting1.com']},
    
      {id: 4, ABN: '111111114', clientName:'Company 4', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent2@accounting1.com', 'agent3@accounting1.com']},
    
      {id: 5, ABN: '111111115', clientName:'Company 5', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent3@accounting1.com', 'agent3@accounting1.com']},
    
      {id: 6, ABN: '111111116', clientName:'Company 6', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent1@accounting1.com', 'agent3@accounting1.com']},
    
    
    
    
      {id: 7, ABN: '111111117', clientName:'Company 7', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent1@accounting1.com', 'agent4@accounting1.com']},
    
      {id: 8, ABN: '111111118', clientName:'Company 8', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent1@accounting1.com', 'agent4@accounting1.com']},
    
      {id: 9, ABN: '111111119', clientName:'Company 9', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent2@accounting1.com', 'agent4@accounting1.com']}
    
    ]

export default (props) => {

    const [ uploadModalShow, setUploadModalShow ] = useState(false)

    const [ addUserModalShow, setAddUserdModalShow ] = useState(false)

    function openUploadModal(){
        setUploadModalShow(true)
    }

    function closeUploadModal(){
        setUploadModalShow(false)
    }

    function update_access(){
        props.onStatusUpdate(true)
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

    return (
        <>
            <Modal.Body style={{padding: '50px 100px', fontSize: '1.6rem', lineHeight: '2.8rem'}}>
                <div>
                    <p>An email has been sent to your email address! </p>
                    <p style={{fontSize: '1.3rem'}}>Please follow the instructions in the email to set up your ATO access.</p>
                    <Button onClick={update_access} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px', marginTop: '20px'}} variant="outline-primary">
                        Send Email Again
                    </Button>
                </div>
                <br/>
                <div style={{width: '100%', textAlign: 'left'}}>
                    <div style={{display: 'flex', flexDirection: 'row', paddingBottom: '20px'}}>
                        <div style={{flex: 1}}>
                            <p>Customers</p>
                        </div>
                    </div>
                    <div style={{}}>
                        <CustomerTable customerData={dummyData}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 1, textAlign: 'left', color: '#ee7170'}}> 
                            <p onClick={openAddUserModal} style={{cursor: 'pointer', fontSize: '1.1rem', fontWeight: '500', display: 'inline'}}>Add customer</p>
                        </div>
                        <div style={{flex: 1, textAlign: 'right', color: '#ee7170'}}>
                            <p onClick={openUploadModal} style={{cursor: 'pointer', fontSize: '1.1rem', fontWeight: '500', display: 'inline'}}>Upload bulk customers</p>
                        </div>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer style={{borderTop: 0, paddingBottom: '50px', paddingLeft: '100px', paddingRight: '100px', paddingTop: '50px'}}>
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

            <UploadBulk uploadModalShow={uploadModalShow} closeUploadModal={closeUploadModal} confirmUpload={confirmUpload}/>


            <AddUserModal addUserModalShow={addUserModalShow} closeAddUserModal={closeAddUserModal} confirmAddUser={confirmAddUser}/>
        </>
    )
}