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
import ActivityStatement from './DocumentTypes/ActivityStatement/ActivityStatement';
import Review from './Review';
import TaxDocument from './DocumentTypes/TaxDocument/TaxDocument';



export default (props) => {


    const [ steps, setSteps ] = useState([])

    const [requestTemplate, setRequestTemplate] = useState(props.request)

    const [request, setRequest] = useState(requestTemplate)

    const [currentStep, setCurrentStep] = useState(0)
    console.log(steps[currentStep])

    const navigate = useNavigate()

    const [ showProcessing, setShowProcessing ] = useState(false)

    function onContinue(){
        console.log(request)
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
            if(newTypesList.includes('AS')){
                newSteps.push('activity-statement')
            }
            if(newTypesList.includes('TD')){
                newSteps.push('tax-document')
            }
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

    function updateProcessDates(startDate, endDate){
        setRequest((oldState) => {
            oldState.processStartDate = startDate
            oldState.processEndDate = endDate
            return oldState
        })
    }

    function updateEffectiveDates(startDate, endDate){
        setRequest((oldState) => {
            oldState.effectiveStartDate = startDate
            oldState.effectiveEndDate = endDate
            return oldState
        })
    }


    function updateSortOrderCode(code){
        setRequest((oldState) => {
            oldState.recordSortOrderCode = code
            return oldState
        })
    }

    function updateSortFieldCode(code){
        setRequest((oldState) => {
            oldState.recordSortFieldCode = code
            return oldState
        })
    }

    function updateTan(tan){
        setRequest((oldState) => {
            oldState.TAN = tan
            return oldState
        })
    }

    function updateAbn(abn){
        setRequest((oldState) => {
            oldState.ABN = abn
            return oldState
        })
    }

    function updateRunMode(mode){
        setRequest((oldState) => {
            oldState.runMode = mode
            return oldState
        })
    }

    function updateAggregationCode(code){
        setRequest((oldState) => {
            oldState.aggregationCode = code
            return oldState
        })
    }

    function updateAccountIdentifier(identifier){
        setRequest((oldState) => {
            oldState.taxAccountIdentifier = identifier
            return oldState
        })
    }

    function updateRoleTypeCode(code){
        setRequest((oldState) => {
            oldState.taxRoleTypeCode = code
            return oldState
        })
    }

    function updateLimit(limit){
        setRequest((oldState) => {
            oldState.limit = limit
            return oldState
        })
    }

    function updateFirstIdx(idx){
        setRequest((oldState) => {
            oldState.firstIdx = idx
            return oldState
        })
    }

    function updateRBA(isRBA){
        setRequest((oldState) => {
            oldState.runningBalanceIndicator = isRBA
            return oldState
        })
    }

    function updateSearchCode(code){
        setRequest((oldState) => {
            oldState.searchCode = code
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
        if(!requestTemplate.ABN){
            requiredSteps.push('abn')
        }
        if(!requestTemplate.TAN){
            requiredSteps.push('tan')
        }
        requiredSteps = requiredSteps.concat(['customer-select', 'select-doc-types'])
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
            {/* <Modal.Body style={{margin: '50px 50px', fontSize: '1.6rem', lineHeight: '2.8rem'}}> */}
                { steps[currentStep] == 'intro' && <Intro closeModal={closeModal} onContinue={onContinue}/>}
                { steps[currentStep] == 'ato-setup' && <ATOSetup onStatusUpdate={updateAtoAccessStatus} onContinue={onContinue} onBack={onBack}/>}
                { steps[currentStep] == 'abn' && <ABN request={request} onUpdateAbn={updateAbn} onContinue={onContinue} onBack={onBack}/>}
                { steps[currentStep] == 'tan' && <TAN request={request} onUpdateTan={updateTan} onContinue={onContinue} onBack={onBack}/>}
                { steps[currentStep] == 'customer-select' && <CustomerSelection request={request} onUpdateCustomersSelected={updateCustomesSelected} onContinue={onContinue} onBack={onBack}/>}
                { steps[currentStep] == 'select-doc-types' && <DocTypeSelection 
                    request={request} 
                    onUpdateTypesSelected={updateTypesSelected} 
                    onContinue={onContinue} 
                    onBack={onBack}/>}
                { steps[currentStep] == 'activity-statement' && <ActivityStatement request={request} onUpdatePeriod={updatePeriod} onContinue={onContinue} onUpdateSearchCode={updateSearchCode} onBack={onBack}/>}
                { steps[currentStep] == 'tax-document' && <TaxDocument 
                    request={request} 
                    onUpdateProcessDates={updateProcessDates} 
                    onUpdateEffectiveDates={updateEffectiveDates} 
                    onContinue={onContinue} onBack={onBack} 
                    onUpdateSortOrderCode={updateSortOrderCode} 
                    onUpdateSortFieldCode={updateSortFieldCode}
                    onUpdateRunMode={updateRunMode}
                    onUpdateAggregationCode={updateAggregationCode}
                    onUpdateAccountIdentifier={updateAccountIdentifier}
                    onUpdateRoleTypeCode={updateRoleTypeCode}
                    onUpdateLimit={updateLimit}
                    onUpdateFirstIdx={updateFirstIdx}
                    onUpdateRBA={updateRBA}
                    />}
                { steps[currentStep] == 'review' && <Review request={request} onSubmit={submitRequest} onBack={onBack}/>}
                {/* { steps[currentStep]== 'period' && <Period request={request} onUpdatePeriod={updatePeriod}/>} */}
                { showProcessing && <Processing closeModal={closeModal} onSeeAllRequests={onSeeAllRequests}/>}
            {/* </Modal.Body>
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
            </Modal.Footer> */}
        </Modal>
    )
}