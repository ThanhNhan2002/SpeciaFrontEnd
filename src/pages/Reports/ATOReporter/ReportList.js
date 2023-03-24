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

const customers = [{id: 1, companyName: 'Company 1', ABN: '0123456789', reports: com1Reports},
                    {id: 2, companyName: 'Company 2', ABN: '0123456789', reports: com2Reports},
                    {id: 3, companyName: 'Company 3', ABN: '0123456789'},
                    {id: 4, companyName: 'Company 4', ABN: '0123456789', reports: com4Reports},
                    {id: 5, companyName: 'Company 5', ABN: '0123456789'},
                    {id: 6, companyName: 'Company 6', ABN: '0123456789'},
                    ]

export default function ReportList() {
  const [open, setCollapse] = useState([]); // cotrolling the state of the collapsible element
  const [toDownload, setDownload] = useState([]);  // cotrolling the state of the children checkboxes
  const [checkedCustomers, setCheckedCustomers] = useState([]); // cotrolling the state of the parent checkboxes

  // action to be fired when the expand button is clicked
  function collapseControl(customerId) {
    if (!open.includes(customerId)) { // open
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

  // action to be fired when the children checkboxes is changed
  function downloadControl(reportID, customerId) {
    let currentCheckbox = document.getElementById(`reportCheckBox${reportID}`);

    if(currentCheckbox.checked === true) { //if the action is to check the checkbox
      setDownload(oldState => {
        return [...oldState, reportID].sort()
      })

      //get the reports object of the parent
      const parents = customers.filter(customer => customer.id === customerId)[0]; // parent object
      const reports = parents.reports;

      //check if alll sibling checboxes is checked
      let allSiblingsChecked = true;
      for(let report of reports) {
        const siblingElements = document.getElementById(`reportCheckBox${report.reportID}`);
        if (!siblingElements.checked) {
          allSiblingsChecked = false;
          break;
        }
      };

      //check if alll sibling checboxes is checked, set the parent checkbox to true
      if (allSiblingsChecked) {
        let parentCheckBox = document.getElementById(`customerCheckbox${customerId}`);
        parentCheckBox.checked=true;
      };

    } else { //if the action is to uncheck the checkbox
      setDownload(oldState => {
        let newState = oldState.filter((item) => item !== reportID);
        return newState.sort()
      })

      let parentCheckBox = document.getElementById(`customerCheckbox${customerId}`);
      parentCheckBox.checked=false;
    }
  }

  // action to be fired when the parent checkboxes is changed
  function downloadCustomerControl (customerId) {
    let currentCheckbox = document.getElementById(`customerCheckbox${customerId}`);

    if(currentCheckbox.checked === true) { // the action is to check the parent checkbox
      setCheckedCustomers([...checkedCustomers, customerId]);
      let customer = customers.filter(customer => customer.id === customerId)[0];
      let reportsOfCustomer = customer.reports;
      reportsOfCustomer.forEach((report) => {if (!toDownload.includes(report.reportID)) {toDownload.push(report.reportID)} })

      //check all children checkboxes of the selected parent checkbox
      for(let i = 0; i < reportsOfCustomer.length; i++) {
        let reportID = reportsOfCustomer[i].reportID;
        let currentReportcheckBox = document.getElementById(`reportCheckBox${reportID}`);
        currentReportcheckBox.checked = true;
      }
    } else { //// the action is to uncheck the parent checkbox
      setCheckedCustomers(
        (oldState) => {
          let newState = oldState.filter(item => item !== customerId)
          return newState.sort();
        }
      );
      let customer = customers.filter(customer => customer.id === customerId)[0];
      let reportsOfCustomerToRemove = customer.reports;
      let reportIDtoRemove =  reportsOfCustomerToRemove.map((report) => report.reportID);
      let remainedReport = toDownload.filter(reportID => !reportIDtoRemove.includes(reportID));
      setDownload(remainedReport.sort());
      
      //uncheck all children checkboxes of the selected parent checkbox
      for(let i = 0; i<reportIDtoRemove.length; i++ ) {
        let currentElement = document.getElementById(`reportCheckBox${reportIDtoRemove[i]}`);
        currentElement.checked=false;
      }
    }
  }

  function startDownload() {
    alert(`downloading report: ${toDownload.sort()}`)
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
                {/* empty column */}
              </div>
              <div className="col-1" style={{ color:"#ee7170" }}>
                ABN
              </div>
                {/* empty column */}
              <div className="col-9" style={{ color:"#ee7170"  }}>
                Customer Name
              </div>
              <div className="col-1">
                {/* empty column */}
              </div>
            </div>

            {customers.map((customer) => (                
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
                              {/* empty column */}
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
                              {/* empty column */}
                            </div>     
                            <div className="col-1" >
                              {/* empty column */}
                            </div>   

                            {(customer.reports || []).map((report, index)=> (
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
