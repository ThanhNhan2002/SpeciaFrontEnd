import { React, useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';


import Modal from 'react-bootstrap/Modal';
import Period from './Period';


const reportTypes = [
    {
        name: 'Activity Statement',
        abbr: 'AS'
    },
    {
        name: 'Account Statement',
        abbr: 'TD'
    }

]

export default (props) => {

    const [selectedTypes, setSelectedTypes] = useState(props.request.reportTypesSelected)


    function typeAddedDeleted(type){
        let newTypesList = [...selectedTypes]
        if (newTypesList.includes(type)){
            newTypesList = newTypesList.filter(item => item != type)
        }else{
            newTypesList.push(type)
        }
        setSelectedTypes(newTypesList)
        
    }

    // useEffect(() => {
    //     props.onUpdateTypesSelected(selectedTypes)
    // }, [selectedTypes]);

    function onContinueHandler(){
        props.onUpdateTypesSelected(selectedTypes)
        props.onContinue()
    }


    return (
        <>
            <Modal.Body style={{padding: '50px 100px', fontSize: '1.6rem', lineHeight: '2.8rem'}}>
                <p>Please select the types of report you want me to process.</p>
                <br/>
                <div style={{marginTop: '20px'}}>
                    { reportTypes.map((report) => <div style={{display: 'flex', alignItems:'center', marginBottom: '15px'}}>
                        { selectedTypes.includes(report.abbr) && <Form.Check.Input onChange={typeAddedDeleted.bind(this, report.abbr)} type='checkbox' style={{margin: 0, borderRadius: '50px'}} checked/>}
                        { !selectedTypes.includes(report.abbr) && <Form.Check.Input onChange={typeAddedDeleted.bind(this, report.abbr)} type='checkbox' style={{margin: 0, borderRadius: '50px'}}/>}
                        <Form.Check.Label style={{marginLeft: '10px'}}>{report.name}</Form.Check.Label>
                    </div> )}
                </div>
                <br/>
                <Period request={props.request} onUpdatePeriod={props.updatePeriod}/>
            </Modal.Body>
            <Modal.Footer style={{borderTop: 0, paddingBottom: '50px', paddingLeft: '100px', paddingRight: '100px', paddingTop: '50px'}}>
                <div style={{display: 'flex', flex: 1}}>
                    <div style={{flex: 1}}>
                        <Button onClick={props.onBack} style={{padding: '15px 35px', borderRadius: '50px'}} variant="outline-primary">
                            Previous Step
                        </Button>
                    </div>
                    <div style={{flex: 1, textAlign: 'right'}}>
                        <Button onClick={onContinueHandler} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="primary">
                            Next Step
                        </Button>
                    </div>
                </div>
            </Modal.Footer>
        </>
    )
}