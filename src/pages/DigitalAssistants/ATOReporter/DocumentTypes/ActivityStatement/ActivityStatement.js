
import { React, useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import Period from './Period';
import SearchCriteriaCode from './SearchCriteriaCode';

const steps = ['period', 'search-code']

export default (props) => {



    const [ currentStep, setCurrentStep ] = useState(0)

    function PreviousStepHandler(){
        setCurrentStep((oldState) => oldState-1)
    }

    function NextStepHandler(){
        setCurrentStep((oldState) => oldState+1)
    }

    return (
        <>
            <Modal.Body style={{margin: '50px 50px', fontSize: '1.6rem', lineHeight: '2.8rem'}}>
                <p>For your Activity Statements</p>
                <br/>
                { steps[currentStep] == 'period' && <Period request={props.request} onUpdatePeriod={props.onUpdatePeriod} />}
                { steps[currentStep] == 'search-code' && <SearchCriteriaCode request={props.request} onUpdateSearchCode={props.onUpdateSearchCode} />}
            </Modal.Body>
            <Modal.Footer style={{borderTop: 0, marginBottom: '15px', marginLeft: '15px', marginRight: '15px'}}>
                <div style={{display: 'flex', flex: 1}}>
                    <div style={{flex: 1}}>
                        { currentStep > 0 && <Button onClick={PreviousStepHandler} style={{padding: '15px 35px', borderRadius: '50px'}} variant="outline-primary">
                            Previous Step
                        </Button>}
                        { currentStep == 0 && <Button onClick={props.onBack} style={{padding: '15px 35px', borderRadius: '50px'}} variant="outline-primary">
                            Previous Step
                        </Button>}
                    </div>
                    <div style={{flex: 1, textAlign: 'right'}}>
                        { currentStep < steps.length-1 && <Button onClick={NextStepHandler} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="primary">
                            Next Step
                        </Button>}
                        { currentStep == steps.length-1 && <Button onClick={props.onContinue} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="primary">
                            Next Step
                        </Button>}
                    </div>
                </div>
            </Modal.Footer>
            
        </>
    )
}