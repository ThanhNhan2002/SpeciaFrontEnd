import { useState, useEffect, React } from 'react'

import Table from 'react-bootstrap/Table';

import styles from '../DigitalAssistants.module.css'

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';


import Modal from 'react-bootstrap/Modal';

const customers = [{id: 1, companyName: 'Company 1', ABN: '0123456789'},
                    {id: 2, companyName: 'Company 2', ABN: '0123456789'},
                    {id: 3, companyName: 'Company 3', ABN: '0123456789'},
                    {id: 4, companyName: 'Company 4', ABN: '0123456789'},
                    {id: 5, companyName: 'Company 5', ABN: '0123456789'},
                    {id: 6, companyName: 'Company 6', ABN: '0123456789'},
                    ]


export default (props) => {

    const [selectedUsers, setSelectedUsers ] = useState(props.request.customersSelected)


    function userAddedDeleted(customer){
        let newUserList = [...selectedUsers]
        if (newUserList.find(cust => cust.id == customer.id)){
            newUserList = newUserList.filter(item => item.id != customer.id)
        }else{
            newUserList.push({...customer})
        }
        setSelectedUsers(newUserList)
        
    }

    useEffect(() => {
        props.onUpdateCustomersSelected(selectedUsers)
    }, [selectedUsers]);

    return (
        <>  
            <Modal.Body style={{margin: '50px 50px', fontSize: '1.6rem', lineHeight: '2.8rem'}}>
                <p>Please select all the customers you want me to process the reports for.</p>
                <Table striped bordered hover variant="dark" style={{marginTop: '30px'}}>
                    <thead>
                        <tr>
                        <th></th>
                        <th>Company Name</th>
                        <th>ABN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr>
                                { selectedUsers.find(cust => cust.id == customer.id) && <td><Form.Check onChange={userAddedDeleted.bind(this, customer)} inline type='checkbox' checked/></td>}
                                { !selectedUsers.find(cust => cust.id == customer.id) && <td><Form.Check onChange={userAddedDeleted.bind(this, customer)} inline type='checkbox'/></td>}
                                <td>{customer.companyName}</td>
                                <td>{customer.ABN}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer style={{borderTop: 0, marginBottom: '15px', marginLeft: '15px', marginRight: '15px'}}>
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
        </>
    )
}