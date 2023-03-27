import { React, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { taxAgentEmails } from '../../DummyResource';
import digitalAssistantsStyles from '../DigitalAssistants.module.css';

export default function AddUserModal ({addUserModalShow, closeAddUserModal, confirmAddUser})  {
    const[clientABN, setClientABN] = useState([]);  
    const[clientName, setClientName] = useState([]);  
    const[adminAccountant, setAdminAccountant] = useState([]);  
    const [checkedBoxes, setCheckedBoxes] = useState([]);  // controlling the state of the children checkboxes

    function checkBoxControl(emailId) {
        let currentCheckbox = document.getElementById(`checkBox${emailId}`);
    
        if(currentCheckbox.checked === true) { //if the action is to check the checkbox
            setCheckedBoxes(oldState => {
            return [...oldState, emailId].sort()
          })
    
        } else { //if the action is to uncheck the checkbox
            setCheckedBoxes(oldState => {
            let newState = oldState.filter((item) => item !== emailId);
            return newState
          })
        }
      }

    function confirmAddUser () {
        console.log(clientABN);      
        console.log(clientName);
        console.log(adminAccountant);
        console.log(checkedBoxes);
    }

    function changeClientABN(e) {
        setClientABN(e.target.value);
    }

    function changeClientName(e) {
        setClientName(e.target.value);
    }

    function changeAdminAccountant(e) {
        setAdminAccountant(e.target.value);
    }

    return (
        <>
        {/* <Modal style={{}} show={addUserModalShow} onHide={closeAddUserModal} centered>
                <Modal.Header style={{backgroundColor: 'rgb(40, 40, 40)', border: 0}} closeButton>
                    <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: 'rgb(40, 40, 40)'}}>
                <div style={{}}>
                    <div style={{margin:'0 0 18px 0'}}>
                        <p style={{fontSize: '1.2rem', margin:'0 0 0 0'}}>Client ABN</p>
                        <Form.Control type="text" onChange={changeClientABN} value = {clientABN} style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} aria-label="ABN" placeholder=''>
                        </Form.Control>
                    </div>

                    <div style={{margin:'0 0 18px 0'}}>
                        <p style={{fontSize: '1.2rem', margin:'0 0 0 0'}}>Client Name</p>
                        <Form.Control type="text" onChange={changeClientName} style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} aria-label="ABN" placeholder=''>
                        </Form.Control>
                    </div>

                    <div style={{margin:'0 0 18px 0'}}>
                        <p style={{fontSize: '1.2rem', margin:'0 0 0 0'}}>Admin accountant email</p>
                        <Form.Control type="text" onChange={changeAdminAccountant} style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} aria-label="ABN" placeholder=''>
                        </Form.Control>
                    </div>

                    <div class="btn-group" style={{margin:'0 30px 60px 0', display:'flex', flexDirection:'column' }}>
                        <div><p style={{fontSize: '1.2rem', margin:'0 0 0 0'}}> Select Tax Agent Email</p></div>
                        <div style={{margin: '3px 0 0 0'}}>
                            <button class="btn btn-secondary dropdown-toggle" style={{ color:'rgba(255,255,255,.7)', backgroundColor:'rgba(255,255,255,.2)',  height: '60px', border: 'none'}} type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                                <b>Tax Agent Email</b>
                            </button>
                            
                            <ul class="dropdown-menu" style={{ backgroundColor:'#ffffff33', maxHeight: '100px', overflowY:'scroll'}} aria-labelledby="dropdownMenuClickable">
                                {taxAgentEmails.map((email, index) => (
                                        <li style = {{padding: '2px 2px'}}>
                                            <div class="form-check" style = {{margin: '2px 2px'}} >
                                                <input class="form-check-input" type="checkbox" id= {`checkBox${email.Id}`} onChange={checkBoxControl.bind(this, email.Id )} />                                         
                                                <label class="form-check-label" style ={{color:'white'}} for={`checkBox${email.Id}`}>
                                                    <div>{email.email}</div>
                                                </label>
                                            </div>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor: 'rgb(40, 40, 40)', border: 0, padding: '20px'}}>
                    <Button style={{borderRadius: '50px', padding: '12px 18px'}} variant="outline-primary" onClick={closeAddUserModal}>
                        Cancel
                    </Button>
                    <Button style={{borderRadius: '50px', padding: '12px 18px'}} variant="primary" onClick={confirmAddUser}>
                        Upload
                    </Button>
                </Modal.Footer>
        </Modal> */}

        <Modal style={{ backgroundColor: 'rgb(0, 0, 0, 0.4)'}} contentClassName = {digitalAssistantsStyles.modalContent} show={addUserModalShow} onHide={closeAddUserModal} centered>
        <Modal.Header style={{ border: 0, color: '#ee7170', padding: 0}} closeButton>
        </Modal.Header>
        <Modal.Body style={{padding: '10px 30px'}}>
                <p style={{color: '#ee7170', fontWeight: '500', fontSize: '1.5rem'}} >Add Customer</p>
                <div style={{margin:'0 0 18px 0'}}>
                    <p style={{ margin:'0 0 0 0'}}>Client ABN</p>
                    <Form.Control type="text" onChange={changeClientABN} value = {clientABN} style={{ color: 'black' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: '1px solid rgba(0, 0, 0,.2)', fontSize: '1.1rem', paddingLeft: '20px'}} aria-label="ABN" placeholder='ABN'>
                    </Form.Control>
                </div>

                <div style={{margin:'0 0 18px 0'}}>
                    <p style={{margin:'0 0 0 0'}}>Client Name</p>
                    <Form.Control type="text" onChange={changeClientName} style={{ color: 'black' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: '1px solid rgba(0, 0, 0,.2)', fontSize: '1.1rem', paddingLeft: '20px'}} aria-label="ABN" placeholder='Name'>
                    </Form.Control>
                </div>

                <div style={{margin:'0 0 18px 0'}}>
                    <p style={{ margin:'0 0 0 0'}}>Admin accountant email</p>
                    <Form.Control type="text" onChange={changeAdminAccountant} style={{ color: 'black' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px',border: '1px solid rgba(0, 0, 0,.2)', fontSize: '1.1rem', paddingLeft: '20px'}} aria-label="ABN" placeholder='Email'>
                    </Form.Control>
                </div>

                <Form.Group className="mb-3" >
                <div class="btn-group" style={{margin:'0 30px 60px 0', display:'flex', flexDirection:'column' }}>
                        <div><p style={{fontSize: '1.2rem', margin:'0 0 0 0'}}> Select Tax Agent Email</p></div>
                        <div style={{margin: '3px 0 0 0'}}>
                            <button class="btn btn-secondary dropdown-toggle" style={{ color:'rgba(0,0,0,.7)', backgroundColor:'rgba(0,0,0,.2)',  height: '60px', border: 'none'}} type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                                <b>Tax Agent Email</b>
                            </button>
                            
                            <ul class="dropdown-menu" style={{ backgroundColor:'#ffffff33', maxHeight: '100px', overflowY:'scroll'}} aria-labelledby="dropdownMenuClickable">
                                {taxAgentEmails.map((email, index) => (
                                        <li style = {{padding: '2px 2px'}}>
                                            <div class="form-check" style = {{margin: '2px 2px'}} >
                                                <input class="form-check-input" type="checkbox" id= {`checkBox${email.Id}`} onChange={checkBoxControl.bind(this, email.Id )} />                                         
                                                <label class="form-check-label" style ={{color:'black'}} for={`checkBox${email.Id}`}>
                                                    <div>{email.email}</div>
                                                </label>
                                            </div>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                </div>
                </Form.Group>
        </Modal.Body>
        <Modal.Footer style={{border: 0, padding: '30px'}}>
        <p style={{ color: '#ee7170', fontWeight: '600', cursor: 'pointer'}}  onClick={confirmAddUser}>
            Upload
        </p>
        </Modal.Footer>
        </Modal>
        </>
    )
}