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
        <Modal.Body style={{padding: '50px 100px', fontSize: '1.6rem', lineHeight: '2.8rem'}}>
            <p>Please review your request</p>
            <br/>
            <div>
                <p>Customers</p>
                { request.customerSelectionMode == 'M' && <Table className="table table-striped" style={{color: 'black', fontSize: '1.1rem', width: '40%', backgroundColor: 'white', borderRadius: '20px'}}>
                    <thead style={{color: '#ee7170'}}>
                        <tr>
                        <th style={{paddingLeft: '2vw', paddingRight: '2vw'}}>Company Name</th>
                        <th style={{paddingLeft: '2vw', paddingRight: '2vw'}}>ABN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {request.customersSelected.map((customer) => (
                            <tr>
                                <td style={{paddingLeft: '2vw'}}>{customer.companyName}</td>
                                <td style={{paddingLeft: '2vw'}}>{customer.ABN}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>}

                { request.customerSelectionMode == 'S' && 
                    <ul>
                        <li style={{fontSize: '1.3rem'}}>ABN: {request.selectedCustomerABN}</li>
                    </ul>
                }
            </div>
            <br/>
            <div>
                <p>Report Types</p>
                <ul>
                    { request.reportTypesSelected.includes('BAS') && <li style={{fontSize: '1.3rem'}}>Business Activity Statement</li> }
                    { request.reportTypesSelected.includes('SOA') && <li style={{fontSize: '1.3rem'}}>Statement of Account</li> }
                </ul>
            </div>

            <br/>

            <div>
                <p>Period</p>
                <ul>
                    <li style={{fontSize: '1.3rem'}}>Start date: {request.periodFrom}</li>
                    <li style={{fontSize: '1.3rem'}}>End date: {request.periodTo}</li>
                </ul>
            </div>



         </Modal.Body>
            <Modal.Footer style={{borderTop: 0, paddingBottom: '50px', paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px'}}>
                <div style={{display: 'flex', flex: 1, textAlign: 'right'}}>
                    <div style={{flex: 1}}>
                        <Button onClick={onBack} style={{padding: '15px 35px', borderRadius: '50px'}} variant="outline-primary">
                            Previous Step
                        </Button>
                    {/* </div>
                    <div style={{flex: 1, textAlign: 'right'}}> */}
                        <Button onClick={onSubmit} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px', marginLeft: '20px'}} variant="primary">
                            Submit
                        </Button>
                    </div>
                </div>
            </Modal.Footer>

        </>
    )
}