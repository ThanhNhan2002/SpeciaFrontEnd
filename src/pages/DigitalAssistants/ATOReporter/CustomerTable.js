

import { React, useState } from 'react'

import styles from '../DigitalAssistants.module.css'



export default ({customerData}) => {

    const [ tableData, setTableData ] = useState(customerData)

    function changeABNHandler(event, id){

        console.log(event.target.value)
        console.log(id)
        setTableData(oldState => {
            let newData = JSON.parse(JSON.stringify(oldState))
            newData.find(item => item.id == id).ABN = event.target.value
            return newData
        })
    }

    function changeAdminAccountantEmailHandler(event, id){

        setTableData(oldState => {
            let newData = JSON.parse(JSON.stringify(oldState))
            newData.find(item => item.id == id).adminAccountantEmail = event.target.value
            return newData
        })
    }

    function changeClientNameHandler(event, id){
        setTableData(oldState => {
            let newData = JSON.parse(JSON.stringify(oldState))
            newData.find(item => item.id == id).clientName = event.target.value
            return newData
        })
    }

    return (
        <div>
            <table class="table" style={{color: 'white', fontSize: '1.1rem', width: '100%'}}>
                <thead style={{color: '#ee7170'}}>
                    <tr>
                        <th scope="col">ABN</th>
                        <th scope="col">Client Name</th>
                        <th scope="col">Admin Accountant</th>
                        <th scope="col">Tax Agent Account</th>
                    </tr>
                </thead>
                <tbody>
                    { tableData.map(customer => 
                        <tr>
                            <td scope="row"><input onChange={(e) => changeABNHandler(e, customer.id)} className={styles.tableField} value={customer.ABN} style={{backgroundColor: 'transparent', border: 0, width: '80%'}} /></td>
                            <td><input onChange={(e) => changeClientNameHandler(e, customer.id)} className={styles.tableField} value={customer.clientName} style={{backgroundColor: 'transparent', border: 0, width: '80%'}} /></td>
                            <td><input onChange={(e) => changeAdminAccountantEmailHandler(e, customer.id)} className={styles.tableField} value={customer.adminAccountantEmail} style={{backgroundColor: 'transparent', border: 0, width: '80%'}} /></td>
                            <td>{customer.taxAgentEmail.length}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}