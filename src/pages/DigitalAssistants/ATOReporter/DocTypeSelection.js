import { React, useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';


import Modal from 'react-bootstrap/Modal';
import Period from './Period';
import MessageModal from '../../../utils/MessageModal';


const reportTypes = [
    {
        name: 'Business Activity Statement',
        abbr: 'BAS'
    },
    {
        name: 'Statement Of Account',
        abbr: 'SOA'
    }

]

export default (props) => {


    const [ messageShow, setMessageShow ] = useState(false)

    const [ errorMessage, setErrorMessage ] = useState('')

    const [ errorDescription, setErrorDescription ] = useState('')

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

    useEffect(() => {
        props.onUpdateTypesSelected(selectedTypes)
    }, [selectedTypes]);

    function onContinueHandler(){
        if( selectedTypes.length == 0){
            setErrorDescription('Please select at least one report type to continue')
            setErrorMessage('No report type selected')
            setMessageShow(true)
        }else if( !props.request.periodFrom ){
            setErrorDescription('Please specify the start date to continue')
            setErrorMessage('Missing start date')
            setMessageShow(true)
        }else if( !props.request.periodTo ){
            setErrorDescription('Please specify the end date to continue')
            setErrorMessage('Missing end date')
            setMessageShow(true)
        }else{
            props.onUpdateTypesSelected(selectedTypes)
            props.onContinue()
        }
    }

    


    return (
        <>
            <Modal.Body style={{padding: '50px 100px', fontSize: '1.6rem', lineHeight: '2.8rem'}}>
                <p>Please select the types of report you want me to process.</p>
                <div style={{marginTop: '20px'}}>
                    { reportTypes.map((report) => <div style={{display: 'flex', alignItems:'center', marginBottom: '15px'}}>
                        { selectedTypes.includes(report.abbr) && <Form.Check.Input onChange={typeAddedDeleted.bind(this, report.abbr)} type='checkbox' style={{margin: 0, borderRadius: '50px'}} checked/>}
                        { !selectedTypes.includes(report.abbr) && <Form.Check.Input onChange={typeAddedDeleted.bind(this, report.abbr)} type='checkbox' style={{margin: 0, borderRadius: '50px'}}/>}
                        <Form.Check.Label style={{marginLeft: '10px', fontSize: '1.3rem'}}>{report.name}</Form.Check.Label>
                    </div> )}
                </div>
                <br/>
                <Period request={props.request} onUpdatePeriod={props.updatePeriod}/>
            </Modal.Body>
            <Modal.Footer style={{borderTop: 0, paddingBottom: '50px', paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px'}}>
                <div style={{display: 'flex', flex: 1, textAlign: 'right'}}>
                    <div style={{flex: 1}}>
                        <Button onClick={props.onBack} style={{padding: '15px 35px', borderRadius: '50px'}} variant="outline-primary">
                            Previous Step
                        </Button>
                    {/* </div>
                    <div style={{flex: 1, textAlign: 'right'}}> */}
                        <Button onClick={onContinueHandler} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px', marginLeft: '20px'}} variant="primary">
                            Next Step
                        </Button>
                    </div>
                </div>
            </Modal.Footer>

            <MessageModal show={messageShow} onClose={() => {setMessageShow(false)}} message={errorMessage} description={errorDescription}></MessageModal>
        </>
    )
}