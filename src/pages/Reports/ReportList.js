
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

  function downloadControl(reportID) {
    // include
    console.log(reportID);
    if (!toDownload.includes(reportID)) {
      
      setDownload(oldState => {
        return [...oldState, reportID]
      })
      // console.log(toDownload);
    } else { //exclude
      setDownload(oldState => {
        let newState = oldState.filter((item) => item !== reportID);
        return newState
      })
    }
  }

  function startDownload() {
    // console.log('inStartDownload');
    // console.log(toDownload);
    // toDownload.map((downloadFile) => {
    //   console.log(downloadFile)
    //   return downloadFile
    // })
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
                      <Form.Check inline type='checkbox' style={{margin:'0 0 0 0 '}}/>
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
                                      <Form.Check onChange={downloadControl.bind(this, report.reportID)} inline type='checkbox' style={{margin:'0 0 0 0 '}}/>
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
