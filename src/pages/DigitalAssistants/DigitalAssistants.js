import {React, useState, useEffect} from 'react';

import styles from './DigitalAssistants.module.css'

import Button from 'react-bootstrap/Button';

import ATOReporter from './ATOReporter/ATOReporter';
import WorkpaperCreator from './WorkpaperCreator/WorkpaperCreator';

export default () => {

    const [ isReporterModalShow, setReporterModalShow ] = useState(false)

    const [ reporterRequest, setReporterRequest ] = useState({})

    function openReporterModal() {
        setReporterRequest({
            isNewUser: true,
            isATOSetup: false,
            customersSelected: [],
            reportTypesSelected: [],
            periodFrom: null,
            periodTo: null
        
        })
        // console.log(request)
        // setReporterModalShow(true);
    }

    function closeReporterModal() {
    setReporterModalShow(false);
    }

    const [ isCreatorModalShow, setCreatorModalShow ] = useState(false)

    function openCreatorModal() {
        setCreatorModalShow(true);
    }

    function closeCreatorModal() {
        setCreatorModalShow(false);
    }
    
    useEffect(() => {
        if (JSON.stringify(reporterRequest) != '{}') {
          setReporterModalShow(true);
        }
    }, [reporterRequest]);


    return (
        <>
        <div style={{textAlign: 'center'}}>
            <p style={{fontWeight: '700', fontSize: '2.5rem', marginTop: '7vh', marginBottom: '7vh'}}>Meet our digital accountants</p>
            <div style={{display: 'flex', flexDirection: 'row', margin: '0 5vw'}}>
                <div style={{cursor: 'pointer', flex: 1, border: '3px solid #4b2976', marginRight: '3vw', borderRadius: '30px', transition: '0.2s', display: 'flex', flexDirection: 'column'}}>
                    <div style={{flex: 3}}>
                        <img style={{border: '2px solid #ee7170',width: '25vh', borderRadius: '20vw', marginTop: '5vh', padding: '8px'}} src={require('../../resources/Marvin.png')}/>
                    </div>
                    <div style={{marginTop: '10px', flex: 2}}>
                        <p style={{fontSize: '2.2rem', fontWeight: '600'}}>Marvin</p>
                        <p style={{color: '#ee7170'}}>The ATO Reporter</p>
                    </div>
                    <div style={{flex: 1}}>
                        <Button onClick={openReporterModal} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="outline-primary">
                            Meet Marvin
                        </Button>
                    </div>
                </div>
                <div style={{cursor: 'pointer', flex: 1, border: '3px solid #4b2976', marginLeft: '3vw', borderRadius: '30px', height: '70vh', transition: '0.2s', display: 'flex', flexDirection: 'column'}}>
                    <div style={{flex: 3}}>
                        <img style={{border: '2px solid #ee7170',width: '25vh', borderRadius: '20vw', marginTop: '5vh', padding: '8px'}} src={require('../../resources/Suzzie.png')}/>
                    </div>
                    <div style={{marginTop: '10px', flex: 2}}>
                        <p style={{fontSize: '2.2rem', fontWeight: '600'}}>Suzzie</p>
                        <p style={{color: '#ee7170'}}>The Workpaper Creator</p>
                    </div>
                    <div style={{flex: 1}}>
                        <Button onClick={openCreatorModal} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="outline-primary">
                            Meet Suzzie
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        <ATOReporter isShow={isReporterModalShow} onClose={closeReporterModal} request={reporterRequest}/>

        <WorkpaperCreator isShow={isCreatorModalShow} onClose={closeCreatorModal}/>

        </>
        
    )
}