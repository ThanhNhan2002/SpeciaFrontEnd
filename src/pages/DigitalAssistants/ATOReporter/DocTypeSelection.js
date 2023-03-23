import { React, useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';


import Modal from 'react-bootstrap/Modal';


const reportTypes = [
    {
        name: 'Activity Statement',
        abbr: 'AS'
    },
    {
        name: 'Tax Document',
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
            <Modal.Body style={{margin: '50px 50px', fontSize: '1.6rem', lineHeight: '2.8rem'}}>
                <p>Please select the types of report you want me to process.</p>
                <div style={{marginTop: '20px'}}>
                    { reportTypes.map((report) => <div style={{display: 'flex', alignItems:'center', marginBottom: '15px'}}>
                        { selectedTypes.includes(report.abbr) && <Form.Check.Input onChange={typeAddedDeleted.bind(this, report.abbr)} type='checkbox' style={{margin: 0, borderRadius: '50px'}} checked/>}
                        { !selectedTypes.includes(report.abbr) && <Form.Check.Input onChange={typeAddedDeleted.bind(this, report.abbr)} type='checkbox' style={{margin: 0, borderRadius: '50px'}}/>}
                        <Form.Check.Label style={{marginLeft: '10px'}}>{report.name}</Form.Check.Label>
                    </div> )}
                </div>
            </Modal.Body>
            <Modal.Footer style={{borderTop: 0, marginBottom: '15px', marginLeft: '15px', marginRight: '15px'}}>
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