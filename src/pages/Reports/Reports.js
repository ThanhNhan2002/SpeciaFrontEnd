import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Reports () {
    return (
        <>
        <div>
            <Tabs defaultActiveKey="home" transition={false} fill>
                <Tab eventKey="ATOreporter" title="ATO Reporter">
    
                </Tab>
                <Tab eventKey="workPaperCreator" title="Work Paper Creator">

                </Tab>
            </Tabs>
        </div>
        </>
    )
}

export default Reports;