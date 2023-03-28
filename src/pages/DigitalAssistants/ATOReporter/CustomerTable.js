

import { React, useState, useEffect } from 'react'

import styles from '../DigitalAssistants.module.css'



export default ({customerData, openAssignmentModal}) => {

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

    function openAssignment(id){
        console.log(id)
        openAssignmentModal(id)
    }

    useEffect(() => {
        setTableData(customerData)
    }, [customerData]);

    return (
        <div>
            <table className="table table-striped" style={{color: 'black', fontSize: '1.1rem', width: '100%', backgroundColor: 'white', borderRadius: '20px'}}>
                <thead style={{color: '#ee7170'}}>
                    <tr>
                        <th style={{paddingLeft: '2vw', paddingRight: '2vw'}} scope="col">ABN</th>
                        <th style={{paddingLeft: '2vw', paddingRight: '2vw'}} scope="col">Client Name</th>
                        <th style={{paddingLeft: '2vw', paddingRight: '2vw'}} scope="col">Admin Accountant</th>
                        <th style={{paddingLeft: '2vw', paddingRight: '2vw'}} scope="col">Assigned to</th>
                    </tr>
                </thead>
                <tbody>
                    { tableData.map(customer => 
                        <tr>
                            <td style={{paddingLeft: '2vw'}} scope="row"><input onChange={(e) => changeABNHandler(e, customer.id)} className={styles.tableField} value={customer.ABN} style={{backgroundColor: 'transparent', border: 0, width: '80%', color: 'black!important'}} /></td>
                            <td style={{paddingLeft: '2vw'}}><input onChange={(e) => changeClientNameHandler(e, customer.id)} className={styles.tableField} value={customer.clientName} style={{backgroundColor: 'transparent', border: 0, width: '80%', color: 'black'}} /></td>
                            <td style={{paddingLeft: '2vw'}}><input onChange={(e) => changeAdminAccountantEmailHandler(e, customer.id)} className={styles.tableField} value={customer.adminAccountantEmail} style={{backgroundColor: 'transparent', border: 0, width: '80%', color: 'black'}} /></td>
                            <td style={{cursor: 'pointer', paddingLeft: '2vw', color:"#ee7170"}} onClick={openAssignment.bind(this, customer.id)} >{customer.taxAgentEmail.length} Users</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}