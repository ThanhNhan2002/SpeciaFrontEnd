import { React, useState, useEffect } from 'react'

import {
    useNavigate, 
  } from "react-router-dom";


import Modal from 'react-bootstrap/Modal';
import Intro from './Intro';

import ATOSetup from './ATOSetup';
import CustomerSelection from './CustomerSelection';
import DocTypeSelection from './DocTypeSelection';
import Period from './DocumentTypes/ActivityStatement/Period';
import Processing from './Processing';
import TAN from './TAN';
import ABN from './ABN';
import Review from './Review';



export default (props) => {

    const [ selectedMode, setSelectedMode ] = useState()


    const [ steps, setSteps ] = useState([])

    const [requestTemplate, setRequestTemplate] = useState(props.request)

    const [request, setRequest] = useState(requestTemplate)

    const [currentStep, setCurrentStep] = useState(0)
    console.log(steps[currentStep])

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
        console.log(request)
    }

    function onSeeAllRequests(){
        navigate('/reports')
    }

    function updateAtoAccessStatus(ato_access_status){
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
        setSteps((oldState) => {
            let newSteps = [...oldState]
            newSteps = newSteps.filter(item => item != 'activity-statement' && item != 'tax-document' && item != 'review')
            console.log(newSteps)
            newSteps.push('review')
            return newSteps
        })
    }

    function updatePeriod(startDate, endDate){
        setRequest((oldState) => {
            oldState.periodFrom = startDate
            oldState.periodTo = endDate
            return oldState
        })
    }


    function modeSelectedHandler(mode){
        setSelectedMode(mode)
    }


    


    function updateCustomerSelectionMode(mode){
        setRequest((oldState) => {
            oldState.customerSelectionMode = mode
            return oldState
        })
    }


    function updateSelectedCustomerABN(abn){
        setRequest((oldState) => {
            oldState.selectedCustomerABN = abn
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
        requiredSteps = requiredSteps.concat(['customer-select', 'select-doc-types-period'])
        setSteps(requiredSteps)
        setRequest(requestTemplate)
      }, [requestTemplate])


    return (
        <Modal show={props.isShow} fullscreen={true} onHide={closeModal}>
            <Modal.Header style={{borderBottom: 0, marginTop: '15px', marginLeft: '15px', marginRight: '15px'}}>
                <Modal.Title style={{color: '#ee7170', fontSize: '2rem', display: 'flex'}}>
                    <img width="40px" src='https://specia.ai/wp-content/uploads/2021/11/huge-circle.svg' style={{ borderRadius: '50px', margin: 'auto 0'}} alt="User avatar"/>
                    <span style={{marginLeft: '25px'}}>Suzzie - The ATO Reporter</span>
                </Modal.Title>
            </Modal.Header>
                { steps[currentStep] == 'intro' && <Intro closeModal={closeModal} onContinue={onContinue} onModeSelected={modeSelectedHandler}/>}
                { steps[currentStep] == 'ato-setup' && <ATOSetup selectedMode={selectedMode} onStatusUpdate={updateAtoAccessStatus} onContinue={onContinue} onBack={onBack}/>}
                { steps[currentStep] == 'customer-select' && <CustomerSelection request={request} onUpdateCustomersSelected={updateCustomesSelected} onUpdateCustomerSelectionMode={updateCustomerSelectionMode} onUpdateSelectedCustomerABN={updateSelectedCustomerABN} onContinue={onContinue} onBack={onBack}/>}
                { steps[currentStep] == 'select-doc-types-period' && <DocTypeSelection 
                    request={request} 
                    onUpdateTypesSelected={updateTypesSelected} 
                    updatePeriod={updatePeriod}
                    onContinue={onContinue} 
                    onBack={onBack}/>}
                { steps[currentStep] == 'review' && <Review request={request} onSubmit={submitRequest} onBack={onBack}/>}
                { showProcessing && <Processing closeModal={closeModal} onSeeAllRequests={onSeeAllRequests}/>}
        </Modal>
    )
}