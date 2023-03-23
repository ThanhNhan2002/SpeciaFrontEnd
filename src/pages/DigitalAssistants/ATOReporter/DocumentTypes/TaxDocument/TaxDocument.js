
import { React, useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import EffectiveDates from './EffectiveDates';
import Pagination from './Pagination';
import ProcessDates from './ProcessDates';
import Sort from './Sort';
import TaxAccountIdentifier from './TaxAccountIdentifier';
import TaxRoleTypeCode from './TaxRoleTypeCode';
import TransactionRunMode from './TransactionRunMode';

const steps = ['account-identifier', 'roletype-code', 'run-mode', 'process-dates', 'effective-dates', 'sort', 'pagination']

export default (props) => {

    let startStepIdx = 0

    if(props.backward){
        startStepIdx = steps.length -1
    }

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
                <p>For your Tax Documents</p>
                <br/>
                { steps[currentStep] == 'account-identifier' && <TaxAccountIdentifier request={props.request} onUpdateAccountIdentifier={props.onUpdateAccountIdentifier} onUpdateRBA={props.onUpdateRBA} />}
                { steps[currentStep] == 'roletype-code' && <TaxRoleTypeCode request={props.request} onUpdateRoleTypeCode={props.onUpdateRoleTypeCode} />}
                { steps[currentStep] == 'run-mode' && <TransactionRunMode request={props.request} onUpdateRunMode={props.onUpdateRunMode} onUpdateAggregationCode={props.onUpdateAggregationCode} />}
                { steps[currentStep] == 'process-dates' && <ProcessDates request={props.request} onUpdateProcessDates={props.onUpdateProcessDates} />}
                { steps[currentStep] == 'effective-dates' && <EffectiveDates request={props.request} onUpdateEffectiveDates={props.onUpdateEffectiveDates} />}
                { steps[currentStep] == 'sort' && <Sort request={props.request} onUpdateSortOrderCode={props.onUpdateSortOrderCode} onUpdateSortFieldCode={props.onUpdateSortFieldCode} />}
                { steps[currentStep] == 'pagination' && <Pagination request={props.request} onUpdateLimit={props.onUpdateLimit} onUpdateFirstIdx={props.onUpdateFirstIdx} />}


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