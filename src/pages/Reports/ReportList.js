
import { useParams } from 'react-router-dom';
import Example from './Example'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import React, { useState } from 'react';

import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

const com1Reports = [
  {reportID: 1, reportType:'BAS', periodFrom:'11-02-2023', periodTo:'15-02-2023'},
  {reportID: 2, reportType:'IAC', periodFrom:'11-02-2023', periodTo:'15-02-2023'},
  {reportID: 3, reportType:'ITA', periodFrom:'11-02-2023', periodTo:'15-02-2023'},
  {reportID: 4, reportType:'General Interest', periodFrom:'11-02-2023', periodTo:'15-02-2023'},
];

const com2Reports = [
  {reportID: 5, reportType:'BAS', periodFrom:'11-02-2023', periodTo:'15-02-2023'},
  {reportID: 6, reportType:'IAC', periodFrom:'11-02-2023', periodTo:'15-02-2023'},
  {reportID: 7, reportType:'ITA', periodFrom:'11-02-2023', periodTo:'15-02-2023'},
];

const com4Reports = [
  {reportID: 8, reportType:'General Interest', periodFrom:'11-02-2023', periodTo:'15-02-2023'},
];

const customers = [{id: 1, companyName: 'Company 1', ABN: '0123456789', report: com1Reports},
                    {id: 2, companyName: 'Company 2', ABN: '0123456789', report: com2Reports},
                    {id: 3, companyName: 'Company 3', ABN: '0123456789'},
                    {id: 4, companyName: 'Company 4', ABN: '0123456789', report: com4Reports},
                    {id: 5, companyName: 'Company 5', ABN: '0123456789'},
                    {id: 6, companyName: 'Company 6', ABN: '0123456789'},
                    ]

const reportTypes = ['BAS', 'IAC', 'ITA', 'General Interest'];

export default function ReportList() {
  let { requestId } = useParams();

  const [open, setCollapse] = useState([]);
  const [toDownload, setDownload] = useState([]);


  const [checkedCustomers, setCheckedCustomers] = useState([]);

  function collapseControl(customerId) {
    // open
    if (!open.includes(customerId)) {
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

  function downloadControl(reportID, customerId) {
    // include
    // if (!toDownload.includes(reportID)) {
    //   setDownload(oldState => {
    //     return [...oldState, reportID]
    //   })
    // } else { //exclude
    //   setDownload(oldState => {
    //     let newState = oldState.filter((item) => item !== reportID);
    //     return newState
    //   })
    // }
    let currentCheckbox = document.getElementById(`reportCheckBox${reportID}`);
    if(currentCheckbox.checked === true) { //check
      setDownload(oldState => {
        return [...oldState, reportID]
      })
    } else { //uncheck
      setDownload(oldState => {
        let newState = oldState.filter((item) => item !== reportID);
        return newState
      })
      console.log(`customerId: ${customerId}`);

      let parentCheckBox = document.getElementById(`customerCheckbox${customerId}`);
      parentCheckBox.checked=false;
    }
  }

  function downloadCustomerControl (customerId) {
    let currentCheckbox = document.getElementById(`customerCheckbox${customerId}`);

    if(currentCheckbox.checked === true) {
      setCheckedCustomers([...checkedCustomers, customerId]);
      let customer = customers.filter(customer => customer.id === customerId)[0];

      let reportOfCustomer = customer.report;
      //console.log(`reportOfCustomer to download: ${JSON.stringify(reportOfCustomer)}`)
      reportOfCustomer.map((report) => {toDownload.includes(report.reportID) ? console.log('nothing') : toDownload.push(report.reportID) })
      // console.log(JSON.stringify(reportOfCustomer));

      //check all child check boxes
      for(let i = 0; i < reportOfCustomer.length; i++) {
        // console.log(reportOfCustomer[i]);
        let reportID = reportOfCustomer[i].reportID;
        let currentReportcheckBox = document.getElementById(`reportCheckBox${reportID}`);
        // console.log(reportID);
        // console.log(currentReportcheckBox);
        currentReportcheckBox.checked = true;
      }

    } else {
      setCheckedCustomers(
        (oldState) => {
          let newState = oldState.filter(item => item !== customerId)
          return newState;
        }
      );
      let customer = customers.filter(customer => customer.id === customerId)[0];
      let reportsOfCustomerToRemove = customer.report;
      //console.log(`report to remove: ${JSON.stringify(reportsOfCustomerToRemove)}`);
      let reportIDtoRemove =  reportsOfCustomerToRemove.map((report) => report.reportID);
      // console.log(`reportIDtoRemove: ${reportIDtoRemove}`);
      let remainedReport = toDownload.filter(reportID => !reportIDtoRemove.includes(reportID));
      // console.log(`remain report: ${remainedReport}`)
      setDownload(remainedReport);
      
      for(let i = 0; i<reportIDtoRemove.length; i++ ) {
        let currentElement = document.getElementById(`reportCheckBox${reportIDtoRemove[i]}`);
        // console.log(`element to uncheck: ${currentElement}`)
        // console.log(currentElement);
        currentElement.checked=false;
      }
    }
  }

  function startDownload() {
    //console.log(checkedCustomers);
    console.log(`downloading: ${toDownload}`);
  }


  return (
    <>
        <div style={{padding: '40px 130px 0px 90px'}}>
          <div style={{margin:'0 0 50px 0'}}>
            <h2>
              Reports
            </h2>
          </div>
          <div className="container">
            <div className="row border-bottom" style={{ marginBottom:'20px', padding:'0 0 20px 0', fontSize:'18px'}}>  
              <div className="col-1">
              </div>
              <div className="col-1" style={{ color:"#ee7170" }}>
                ABN
              </div>

              <div className="col-9" style={{ color:"#ee7170"  }}>
                Customer Name
              </div>
              <div className="col-1">
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
                    <div className="col-1" style={{textAlign:'center'}}>
                      <Form.Check id={`customerCheckbox${customer.id}`} onChange={downloadCustomerControl.bind(this, customer.id)} inline type='checkbox' style={{margin:'0 0 0 0 '}}/>
                    </div>
              
                      <Collapse in={open.includes(customer.id)} style={{padding:'0px'}}>
                        <div>
                          <div style={{padding:'0px 0 0 0px', margin:'30px 0 30px 0'}}>
                            <div className="container">
                              <div className="row" style={{fontSize:'15px'}}>
                                <div className="col-2">
                                </div>
                                <div className="col-1">
                                  <p >Report ID</p>
                                </div>
                                <div className="col-2"  style={{textAlign:'center'}}>
                                  Report Type
                                </div>
                                <div className="col-2"  style={{textAlign:'center'}}>
                                  Period From
                                </div>
                                <div className="col-2"  style={{textAlign:'center'}}>
                                  Period To
                                </div>       
                                <div className="col-2">
                                </div>     
                                <div className="col-1" >
                                </div>   

                                {(customer.report || []).map((report, index)=> (
                                  <>
                                    <div className="col-2">
                                    </div>       
                                    <div className="col-1">
                                      {report.reportID}
                                    </div>
                                    <div className="col-2"  style={{textAlign:'center'}}>
                                      {report.reportType}
                                    </div>
                                    <div className="col-2"  style={{textAlign:'center'}}>
                                      11-02-2023
                                    </div>
                                    <div className="col-2"  style={{textAlign:'center'}}>
                                      15-02-2023
                                    </div>       
                                    <div className="col-2" style={{textAlign:'center'}}>
                                      <Link to='' style={{color:'#ee7170'}}>
                                        See Report
                                      </Link>
                                    </div>     
                                    <div className="col-1" style={{textAlign:'center'}}>
                                      <Form.Check onChange={downloadControl.bind(this, report.reportID, customer.id)} id={`reportCheckBox${report.reportID}`} inline type='checkbox' style={{margin:'0 0 0 0 '}}/>
                                    </div>  
                                  </>
                                ))}
                              </div>
                            </div>
                            </div>
                        </div>
                      </Collapse>
                  </div>
                </>
            )) }
          </div>
          <div style={{textAlign:'right', margin:'40px 0 0 0'}}>
            <Button onClick={startDownload} style={{padding: '15px 10px 15px 10px', borderRadius: '50px', width:'280px'}} variant="primary">
              Download selected reports
            </Button>
          </div>
        </div>
    </>
  )
}
