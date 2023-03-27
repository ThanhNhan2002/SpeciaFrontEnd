import { React, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { taxAgentEmails } from '../../DummyResource';
import digitalAssistantsStyles from '../DigitalAssistants.module.css';
import Button from 'react-bootstrap/Button';


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

    function addUser () {
        confirmAddUser();
        console.log(clientABN);      
        console.log(clientName);
        console.log(adminAccountant);
        console.log(checkedBoxes);
        setCheckedBoxes([]);
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
        <Modal style={{ backgroundColor: 'rgb(0, 0, 0, 0.4)'}} contentClassName = {digitalAssistantsStyles.modalContent} show={addUserModalShow} onHide={closeAddUserModal} centered>
            <Modal.Header style={{ border: 0, color: '#ee7170', padding: 0}} closeButton></Modal.Header>
            <Modal.Body style={{padding: '10px 30px'}}>
                <p style={{color: '#ee7170', fontWeight: '500', fontSize: '1.5rem'}} >Add Customer</p>
                <Form>
                    <Form.Group style={{margin:'0 0 20px 0'}}>
                        <Form.Label>Client ABN</Form.Label>
                        <Form.Control className="clientABNinput" type="text" placeholder="ABN" onChange={changeClientABN}/>
                    </Form.Group>

                    <Form.Group style={{margin:'0 0 20px 0'}}>
                        <Form.Label>Client Name</Form.Label>
                        <Form.Control className="clientABNinput" type="text" placeholder="Name"  onChange={changeClientName}/>
                    </Form.Group>

                    <Form.Group style={{margin:'0 0 20px 0'}}>
                        <Form.Label>Admin Accountant Email</Form.Label>
                        <Form.Control className="clientABNinput" type="text" placeholder="Email"  onChange={changeAdminAccountant}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <div class="btn-group" style={{margin:'0 30px 60px 0', display:'flex', flexDirection:'column' }}>
                            <Form.Label>Select tax agent emails</Form.Label>
                            <div style={{margin: '3px 0 0 0'}}>
                                <button class="btn btn-secondary dropdown-toggle" style={{ color:'white', backgroundColor:'#ee7170',  height: '40px', border: 'none'}} type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                                    <b>Tax Agent Email</b>
                                </button>
                                
                                <ul class="dropdown-menu" style={{ backgroundColor:'#white', maxHeight: '100px', overflowY:'scroll'}} aria-labelledby="dropdownMenuClickable">
                                    {taxAgentEmails.map((email, index) => (
                                        <li style = {{padding: '2px 2px'}}>
                                            <div class="form-check" style = {{margin: '2px 2px'}} >
                                                <input class="form-check-input" style={{outline:'1px solid #ee7170'}} type="checkbox" id= {`checkBox${email.Id}`} onChange={checkBoxControl.bind(this, email.Id )} />                                         
                                                <label class="form-check-label" style ={{color:'rgba(0, 0, 0, 0.5)', fontWeight:'500'}} for={`checkBox${email.Id}`}>
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
                </Form>
            </Modal.Body>
            <Modal.Footer style={{border: 0, padding: '30px'}}>
                <p style={{ color: '#ee7170', fontWeight: '600', cursor: 'pointer'}}  onClick={addUser}>
                    Upload
                </p>
            </Modal.Footer>
        </Modal>
        </>
    )
}