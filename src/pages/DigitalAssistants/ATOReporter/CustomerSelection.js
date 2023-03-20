import Table from 'react-bootstrap/Table';

import styles from '../DigitalAssistants.module.css'

import Form from 'react-bootstrap/Form';

const customers = [{companyName: 'Company 1', ABN: '0123456789'},
                    {companyName: 'Company 2', ABN: '0123456789'},
                    {companyName: 'Company 3', ABN: '0123456789'},
                    {companyName: 'Company 4', ABN: '0123456789'},
                    {companyName: 'Company 5', ABN: '0123456789'},
                    {companyName: 'Company 6', ABN: '0123456789'},
                    ]


export default () => {
    return (
        <>
            <p>Please select all the customers you want me to process the reports for.</p>
            <ul style={{listStyleType: 'none', padding: 0}}>
            <Table striped bordered hover variant="dark">
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
                        <td><Form.Check inline type='checkbox'/></td>
                        <td>{customer.companyName}</td>
                        <td>{customer.ABN}</td>
                    </tr>
                ))}
            </tbody>
            </Table>
                    </ul>
        </>
    )
}