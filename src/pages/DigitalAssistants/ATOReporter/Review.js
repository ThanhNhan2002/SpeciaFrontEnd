import { React, useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

import Table from 'react-bootstrap/Table';




export default ({request, onBack, onSubmit}) => {


    console.log(request)

    // useEffect(() => {
    //      set
    // }, [currentLineIdx])



    return (
        <>
        <Modal.Body style={{padding: '50px 50px', fontSize: '1.6rem', lineHeight: '2.8rem'}}>
            <p>Please review your request</p>
            <br/>
            <div>
                <p>Customers</p>
                <Table striped bordered hover variant="dark" style={{marginTop: '30px'}}>
                    <thead>
                        <tr>
                        <th>Company Name</th>
                        <th>ABN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {request.customersSelected.map((customer) => (
                            <tr>
                                <td>{customer.companyName}</td>
                                <td>{customer.ABN}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <br/>
            <div>
                <p>Report Types</p>
                <ul>
                    { request.reportTypesSelected.includes('AS') && <li style={{fontSize: '1.3rem'}}>Activity Statement</li> }
                    { request.reportTypesSelected.includes('TD') && <li style={{fontSize: '1.3rem'}}>Tax Document</li> }
                </ul>
            </div>
            { request.reportTypesSelected.includes('AS') && 
            <>
            <br/>
            <div>
                <p>For your Activity Statements</p>
                <ul>
                    <li style={{fontSize: '1.3rem'}}>Period: From {request.periodFrom} To {request.periodTo}</li>
                    <li style={{fontSize: '1.3rem'}}>Search Criteria Code: {request.searchCode}</li>
                </ul>
            </div>
            </>}
            { request.reportTypesSelected.includes('TD') &&  
            
            <>
            <br/>
            <div>
                <p>For your Tax Documents</p>
                <ul>
                    <li style={{fontSize: '1.3rem'}}>Tax Account Identifier: {request.taxAccountIdentifier}</li>
                    <li style={{fontSize: '1.3rem'}}>Running Balance Indicator: {request.runningBalanceIndicator}</li>
                    <li style={{fontSize: '1.3rem'}}>Tax Role Type Code: {request.taxRoleTypeCode}</li>
                    { request.runMode == 'N' && <li style={{fontSize: '1.3rem'}}>Transaction Run Mode: Normal Mode</li>}
                    { request.runMode == 'A' && <><li style={{fontSize: '1.3rem'}}>Transaction Run Mode: Aggregate Mode</li><li style={{fontSize: '1.3rem'}}>Aggregation Code: {request.aggregationCode}</li></>}
                    <li style={{fontSize: '1.3rem'}}>Process Date Range: From {request.processStartDate} To {request.processEndDate}</li>
                    <li style={{fontSize: '1.3rem'}}>Effective Date Range: From {request.effectiveStartDate} To {request.effectiveEndDate}</li>
                    <li style={{fontSize: '1.3rem'}}>Order by: {request.recordSortFieldCode}</li>
                    <li style={{fontSize: '1.3rem'}}>Order: {request.recordSortOrderCode}</li>
                    <li style={{fontSize: '1.3rem'}}>Limit: {request.limit}</li>
                    <li style={{fontSize: '1.3rem'}}>First Record Index: {request.firstIdx}</li>
                </ul>
            </div>
            </>}

         </Modal.Body>
            <Modal.Footer style={{borderTop: 0, marginBottom: '15px', marginLeft: '15px', marginRight: '15px'}}>
                <div style={{display: 'flex', flex: 1}}>
                    <div style={{flex: 1}}>
                        <Button onClick={onBack} style={{padding: '15px 35px', borderRadius: '50px'}} variant="outline-primary">
                            Previous Step
                        </Button>
                    </div>
                    <div style={{flex: 1, textAlign: 'right'}}>
                        <Button onClick={onSubmit} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="primary">
                            Submit your request
                        </Button>
                    </div>
                </div>
            </Modal.Footer>

        </>
    )
}