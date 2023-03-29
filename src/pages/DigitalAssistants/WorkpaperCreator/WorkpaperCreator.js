import { React, useState, useEffect } from 'react'

import {
    useNavigate, 
  } from "react-router-dom";

import Modal from 'react-bootstrap/Modal';
import Intro from './Intro';

import ATOSetup from './ATOSetup';
import CustomerSelection from './CustomerSelection';
import Processing from './Processing';
import FinancialYear from './FinancialYear';
import Review from './Review';



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

        console.log(request)
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


    function updateCustomesSelected(newCustomersList){
        setRequest((oldState) => {
            oldState.customersSelected = newCustomersList
            return oldState
        })
    }


    function updateFinancialYear(year){
        setRequest((oldState) => {
            oldState.financialYear = year
            return oldState
        })
    }

    useEffect(() => {
        setRequestTemplate(props.request)
        console.log()
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
        requiredSteps = requiredSteps.concat(['customer-select', 'financial-year', 'review'])
        console.log(requiredSteps)
        setSteps(requiredSteps)
        setRequest(requestTemplate)
      }, [requestTemplate])


    return (
        <Modal show={props.isShow} fullscreen={true} onHide={closeModal}>
            <Modal.Header style={{borderBottom: 0, marginTop: '15px', marginLeft: '15px', marginRight: '15px'}} closeButton>
                <Modal.Title style={{color: '#ee7170', fontSize: '2rem', display: 'flex'}}>
                    <img width="40px" src='https://specia.ai/wp-content/uploads/2021/11/huge-circle.svg' style={{ borderRadius: '50px', margin: 'auto 0'}} alt="User avatar"/>
                    <span style={{marginLeft: '25px'}}>Susan - The Workpaper Creator</span>
                    </Modal.Title>
            </Modal.Header>
            {/* <Modal.Body style={{margin: '50px 50px', fontSize: '1.6rem', lineHeight: '2.8rem'}}> */}
                { steps[currentStep]== 'intro' && <Intro onContinue={onContinue} closeModal={closeModal}/>}
                { steps[currentStep]== 'ato-setup' && <ATOSetup onContinue={onContinue} onBack={onBack}/>}
                { steps[currentStep]== 'customer-select' && <CustomerSelection request={request} onUpdateCustomersSelected={updateCustomesSelected} onUpdateCustomerSelectionMode={updateCustomerSelectionMode} onUpdateSelectedCustomerABN={updateSelectedCustomerABN} onContinue={onContinue} onBack={onBack}/>}
                { steps[currentStep]== 'financial-year' && <FinancialYear request={request} onUpdateYear={updateFinancialYear} onContinue={onContinue} onBack={onBack}/>}
                { steps[currentStep] == 'review' && <Review request={request} onSubmit={submitRequest} onBack={onBack}/>}
                { showProcessing && <Processing/>}
            {/* </Modal.Body> */}
        </Modal>
    )
}