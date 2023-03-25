import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import { React, useState } from 'react'
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';
import { taxAgentEmails } from '../../DummyResource';

// eslint-disable-next-line import/no-anonymous-default-export



export default function AddUserModal ({addUserModalShow, closeAddUserModal, confirmAddUser})  {
    const [checkedBoxes, setCheckedBoxes] = useState([]);  // cotrolling the state of the children checkboxes

    // action to be fired when the children checkboxes is changed
    function checkboxesControl(checkboxId) {
        let currentCheckbox = document.getElementById(`checkBox${checkboxId}`);

        if(currentCheckbox.checked === true) { //if the action is to check the checkbox
            setCheckedBoxes(oldState => {
            return [...oldState, checkboxId].sort()
        })

        // //get the reports object of the parent
        // const parents = customers.filter(customer => customer.id === customerId)[0]; // parent object
        // const reports = parents.reports;

        // //check if alll sibling checboxes is checked
        // let allSiblingsChecked = true;
        // for(let report of reports) {
        //     const siblingElements = document.getElementById(`reportCheckBox${report.reportID}`);
        //     if (!siblingElements.checked) {
        //     allSiblingsChecked = false;
        //     break;
        //     }
        // };

        //check if alll sibling checboxes is checked, set the parent checkbox to true
        // if (allSiblingsChecked) {
        //     let parentCheckBox = document.getElementById(`customerCheckbox${customerId}`);
        //     parentCheckBox.checked=true;
        // };

        } else { //if the action is to uncheck the checkbox
            setCheckedBoxes(oldState => {
            let newState = oldState.filter((item) => item !== checkboxId);
            return newState.sort()
        })

        // let parentCheckBox = document.getElementById(`customerCheckbox${customerId}`);
        // parentCheckBox.checked=false;
        }
    }

    function confirmAddUser () {
        console.log(checkedBoxes);
    }


    return (
        <Modal style={{}} show={addUserModalShow} onHide={closeAddUserModal} centered>
                <Modal.Header style={{backgroundColor: 'rgb(40, 40, 40)', border: 0}} closeButton>
                    <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: 'rgb(40, 40, 40)'}}>
                {/* <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Please select a CSV file</Form.Label>
                    <br/>
                    <Form.Control type="file" style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} />
                </Form.Group> */}

                <div style={{}}>
                    <div style={{margin:'0 0 18px 0'}}>
                        <p style={{fontSize: '1.2rem', margin:'0 0 0 0'}}>Client ABN</p>
                        <Form.Control type="text" style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} aria-label="ABN" placeholder='ABN'>
                        </Form.Control>
                    </div>

                    <div style={{margin:'0 0 18px 0'}}>
                        <p style={{fontSize: '1.2rem', margin:'0 0 0 0'}}>Client Name</p>
                        <Form.Control type="text" style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} aria-label="ABN" placeholder='ABN'>
                        </Form.Control>
                    </div>

                    <div style={{margin:'0 0 18px 0'}}>
                        <p style={{fontSize: '1.2rem', margin:'0 0 0 0'}}>Client ABN</p>
                        <Form.Control type="text" style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} aria-label="ABN" placeholder='ABN'>
                        </Form.Control>
                    </div>

                    <div style={{margin:'0 0 18px 0'}}>
                        <p style={{fontSize: '1.2rem', margin:'0 0 0 0'}}>Admin accountant email</p>
                        <Form.Control type="text" style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} aria-label="ABN" placeholder='ABN'>
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
                                                <input class="form-check-input" type="checkbox" id= {`checkBox${email.id}`} onChange={checkboxesControl.bind(this, email.id)}/>
                                                <label class="form-check-label" style ={{color:'white'}} for={`checkBox${email.id}`}>
                                                    <div>{email.email}</div>
                                                </label>
                                            </div>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                  
                    


                    {/* <Dropdown className="d-inline mx-2" autoClose={false}>
                        <Dropdown.Toggle id="dropdown-autoclose-false">
                        Manual Close
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}



                    




                    {/* <select class="form-select" multiple aria-label="multiple select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>

                        <option value="3">Three</option>
                    </select> */}

                    {/* <Form.Group controlId="my_multiselect_field">
                    <Form.Label>My multiselect</Form.Label>
                    <Form.Control as="select" multiple>
                        <option value="field1">Field 1</option>
                        <option value="field2">Field 2</option>
                        <option value="field3">Field 3</option>
                    </Form.Control>
                    </Form.Group> */}



                    {/* <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label class="form-check-label" for="flexCheckChecked">
                            Checked checkbox
                        </label>
                    </div> */}
                    
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
        </Modal>
    )
}