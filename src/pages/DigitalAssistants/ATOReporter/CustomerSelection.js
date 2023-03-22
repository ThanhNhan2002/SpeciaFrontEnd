import { useState, useEffect, React } from 'react'

import Table from 'react-bootstrap/Table';

import styles from '../DigitalAssistants.module.css'

import Form from 'react-bootstrap/Form';

const customers = [{id: 1, companyName: 'Company 1', ABN: '0123456789'},
                    {id: 2, companyName: 'Company 2', ABN: '0123456789'},
                    {id: 3, companyName: 'Company 3', ABN: '0123456789'},
                    {id: 4, companyName: 'Company 4', ABN: '0123456789'},
                    {id: 5, companyName: 'Company 5', ABN: '0123456789'},
                    {id: 6, companyName: 'Company 6', ABN: '0123456789'},
                    ]


export default (props) => {

    const [selectedUsers, setSelectedUsers ] = useState(props.request.customersSelected)


    function userAddedDeleted(id){
        let newUserList = [...selectedUsers]
        if (newUserList.includes(id)){
            newUserList = newUserList.filter(item => item != id)
        }else{
            newUserList.push(id)
        }
        setSelectedUsers(newUserList)
        
    }

    useEffect(() => {
        props.onUpdateCustomersSelected(selectedUsers)
    }, [selectedUsers]);

    return (
        <>  
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
                            { selectedUsers.includes(customer.id) && <td><Form.Check onChange={userAddedDeleted.bind(this, customer.id)} inline type='checkbox' checked/></td>}
                            { !selectedUsers.includes(customer.id) && <td><Form.Check onChange={userAddedDeleted.bind(this, customer.id)} inline type='checkbox'/></td>}
                            <td>{customer.companyName}</td>
                            <td>{customer.ABN}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}