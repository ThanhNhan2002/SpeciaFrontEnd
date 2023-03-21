import { React, useState, useEffect } from 'react'

import {
    useNavigate, 
  } from "react-router-dom";

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import Intro from './Intro';

import ATOSetup from './ATOSetup';
import CustomerSelection from './CustomerSelection';
import DocTypeSelection from './DocTypeSelection';
import Period from './Period';
import Processing from './Processing';



export default (props) => {


    const [ steps, setSteps ] = useState([])

    const [requestTemplate, setRequestTemplate] = useState(props.request)

    const [request, setRequest] = useState(requestTemplate)

    const [currentStep, setCurrentStep] = useState(0)

    const navigate = useNavigate()

    const [ showProcessing, setShowProcessing ] = useState(false)

    function onContinue(){
        setCurrentStep(currentStep => currentStep+1)
    }

    function onBack(){
        setCurrentStep(currentStep => currentStep-1)
    }

    function closeModal(){
        setTimeout(()=> {
            setCurrentStep(0)
            setShowProcessing(false)
        }, 200)
        props.onClose()
    }

    function submitRequest(){
        setCurrentStep(currentStep => currentStep+1)
        setShowProcessing(true)
    }

    function onSeeAllRequests(){
        navigate('/reports')
    }

    function updateAtoAccessStatus(ato_access_status){
        console.log(request)
        setRequest((oldState) => {
            oldState.isATOSetup = ato_access_status
            return oldState
        })
    }

    function updateCustomesSelected(newCustomersList){
        setRequest((oldState) => {
            oldState.customersSelected = newCustomersList
            return oldState
        })
    }

    function updateTypesSelected(newTypesList){
        setRequest((oldState) => {
            oldState.reportTypesSelected = newTypesList
            return oldState
        })
    }

    function updatePeriod(startDate, endDate){
        setRequest((oldState) => {
            oldState.periodFrom = startDate
            oldState.periodTo = endDate
            return oldState
        })
    }

    useEffect(() => {
        setRequestTemplate(props.request)
      }, [props.request]);

    useEffect(() => {
        let requiredSteps = []
        console.log(requestTemplate)
        if(requestTemplate.isNewUser){
            requiredSteps.push('intro')
        }
        if(!requestTemplate.isATOSetup){
            requiredSteps.push('ato-setup')
        }
        requiredSteps = requiredSteps.concat(['customer-select', 'select-doc-types', 'period'])
        console.log(requiredSteps)
        setSteps(requiredSteps)
        setRequest(requestTemplate)
      }, [requestTemplate])


    return (
        <Modal show={props.isShow} fullscreen={true} onHide={closeModal}>
            <Modal.Header style={{borderBottom: 0, marginTop: '15px', marginLeft: '15px', marginRight: '15px'}} closeButton>
                <Modal.Title style={{color: '#ee7170', fontSize: '2rem'}}>
                    <img width="40px" src='https://specia.ai/wp-content/uploads/2021/11/huge-circle.svg' style={{ borderRadius: '50px', margin: 'auto 0'}} alt="User avatar"/>
                    <span style={{marginLeft: '25px', paddingTop: '10px'}}>Marvin - The ATO Reporter</span>
                    </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{margin: '50px 50px', fontSize: '1.6rem', lineHeight: '2.8rem'}}>
                { steps[currentStep]== 'intro' && <Intro/>}
                { steps[currentStep]== 'ato-setup' && <ATOSetup onStatusUpdate={updateAtoAccessStatus}/>}
                { steps[currentStep]== 'customer-select' && <CustomerSelection request={request} onUpdateCustomersSelected={updateCustomesSelected}/>}
                { steps[currentStep]== 'select-doc-types' && <DocTypeSelection request={request} onUpdateTypesSelected={updateTypesSelected}/>}
                { steps[currentStep]== 'period' && <Period request={request} onUpdatePeriod={updatePeriod}/>}
                { showProcessing && <Processing/>}
            </Modal.Body>
            <Modal.Footer style={{borderTop: 0, marginBottom: '15px', marginLeft: '15px', marginRight: '15px'}}>
                <div style={{display: 'flex', flex: 1}}>
                    <div style={{flex: 1}}>
                        { currentStep > 0 && currentStep <= steps.length-1 && <Button onClick={onBack} style={{padding: '15px 35px', borderRadius: '50px'}} variant="outline-primary">
                            Previous Step
                        </Button>}
                        { currentStep == 0 && <Button onClick={closeModal} style={{padding: '15px 35px', borderRadius: '50px'}} variant="outline-primary">
                            Cancel
                        </Button>}
                        { currentStep > steps.length-1 && <Button onClick={closeModal} style={{padding: '15px 35px', borderRadius: '50px'}} variant="outline-primary">
                            Go back to home
                        </Button>}
                    </div>
                    <div style={{flex: 1, textAlign: 'right'}}>
                        { currentStep < steps.length-1 && <Button onClick={onContinue} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="primary">
                            Next Step
                        </Button>}
                        { currentStep == steps.length-1 && <Button onClick={submitRequest} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="primary">
                            Submit Request
                        </Button>}
                        { currentStep > steps.length-1 && <Button onClick={onSeeAllRequests} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="primary">
                            See all requests
                        </Button>}
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
    )
}