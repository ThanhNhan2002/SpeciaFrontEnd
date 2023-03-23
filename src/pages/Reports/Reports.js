import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Requests from './ATOReporter/ReportList'
import ATOrequests from './ATOReporter/ATOrequests'


function Reports () {
    return (
        <>
        <div>
            <div style={{margin:'40px 0 0 0', textColor:'ee7170'}}>
                <h2 style={{ color:'#ee7170'}}>All requests</h2>
            </div>
            <div style={{display:'flex', justifyContent:'center', margin:'80px 0 15px 0'}}>
                <div style ={{display:'flex'}}>
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{border: '1px solid rgba(255, 255, 255, 0.4)',  borderRadius:'50px', padding:'0px'}}>
                            <li style = {{margin:'0px'}} class="nav-item" role="presentation" >
                                <button style = {{borderRadius:'20px', width:'200px'}} class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                    <div style={{fontSize: '16px'}}>ATO Reporter</div>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button style ={{borderRadius:'20px',  width:'200px'}} class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                    <div style={{fontSize: '16px'}}>WorkpaperCreator</div>
                                </button>
                            </li>
                        </ul>
                </div>
            </div>

            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div style={{ display:'flex', justifyContent:'center'}}>
                        <div style={{width:'1200px'}}>
                            <ATOrequests />
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">To be implemented</div>
            </div>
        </div>
        </>
    )
}

export default Reports;