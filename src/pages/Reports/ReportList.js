
import { useParams } from 'react-router-dom';
import Example from './Example'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const customers = [{id: 1, companyName: 'Company 1', ABN: '0123456789'},
                    {id: 2, companyName: 'Company 2', ABN: '0123456789'},
                    {id: 3, companyName: 'Company 3', ABN: '0123456789'},
                    {id: 4, companyName: 'Company 4', ABN: '0123456789'},
                    {id: 5, companyName: 'Company 5', ABN: '0123456789'},
                    {id: 6, companyName: 'Company 6', ABN: '0123456789'},
                    ]

const reportTypes = ['BAS', 'IAS', 'ICA', 'IAT'];


export default function ReportList() {
  let { requestId } = useParams();

  const [open, setCollapse] = useState([]);

  function collapseControl(customerId) {
    // open
    if (!open.includes(customerId)) {
      console.log('expand')
      setCollapse(oldState => {
        return [...oldState, customerId]
      })
    } else { //close
      setCollapse(oldState => {
        let newState = oldState.filter((item) => item !== customerId);
        return newState
      })
    }
  }


  return (
    <>
      <div style={{padding:"40px 130px 0 1px"}}>  
        <h2>
          Reports
        </h2>
        <div style={{padding: '100px'}}>
          <div className="container">
            <div className="row border-bottom" style={{ marginBottom:'20px', padding:'0 0 20px 0', fontSize:'20px'}}>  
              <div className="col-1">

              </div>
              <div className="col-1">
                Id
              </div>
              <div className="col-9">
                Name
              </div>
              <div className="col-1">
                Select
              </div>
            </div>

            {customers.map((customer) => (
                <>
                  <div className="row border-bottom" style={{ marginBottom:'20px', padding:'0 0 20px 0', fontSize:'20px'}}>
                    <div className="col-1">                  
                      <Button onClick={collapseControl.bind(this, customer.id)} style={{ padding:'5px', height:'20px', margin:'0px', fontSize:'10px', lineHeight: '5px'}}>
                        +
                      </Button>
                    </div>
                    <div className="col-1">
                      {customer.id}
                    </div>
                    <div className="col-9">
                      {customer.companyName}
                    </div>
                    <div className="col-1">
                      <Form.Check inline type='checkbox' />
                    </div>
                    <Collapse in={open.includes(customer.id)}>
                      <div style={{padding:'0px 0 0 184px', margin:'30px 0 30px 0'}}>
                        <div className="container">
                          <div className="row" style={{fontSize:'15px'}}>
                            <div className="col-2" >
                              <p >Report ID</p>
                            </div>
                            <div className="col-2">
                              Report Type
                            </div>
                            <div className="col-2">
                              From Date
                            </div>
                            <div className="col-2">
                              To Date
                            </div>       
                            <div className="col-2">
                              
                            </div>     
                            <div className="col-2" style={{textAlign:'right'}}>
                            
                            </div>   

                            {reportTypes.map((reportType, index)=> (
                              <div className="row" style={{fontSize:'15px'}}>
                                <div className="col-2" >
                                  <p > {index+1}</p>
                                </div>
                                <div className="col-2">
                                  {reportType}
                                </div>
                                <div className="col-2">
                                  11-02-2023
                                </div>
                                <div className="col-2">
                                  15-02-2023
                                </div>       
                                <div className="col-2">
                                  See Report
                                </div>     
                                <div className="col-2" style={{textAlign:'right'}}>
                                  <Form.Check inline type='checkbox' />
                                </div>  
                              </div>
                            ))}

                          </div>
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </>
            )) }
          </div>
        </div>
      </div>
    </>
  )
}
