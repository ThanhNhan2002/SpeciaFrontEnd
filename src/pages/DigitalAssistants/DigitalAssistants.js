import {React, useState, useEffect} from 'react';

import styles from './DigitalAssistants.module.css'

import Button from 'react-bootstrap/Button';

import ATOReporter from './ATOReporter/ATOReporter';
import WorkpaperCreator from './WorkpaperCreator/WorkpaperCreator';

export default () => {

    const [ isReporterModalShow, setReporterModalShow ] = useState(false)

    const [ isCreatorModalShow, setCreatorModalShow ] = useState(false)

    const [ reporterRequest, setReporterRequest ] = useState({})

    const [ creatorRequest, setCreatorRequest ] = useState({})

    function openReporterModal() {
        setReporterRequest({
            isNewUser: true,
            isATOSetup: false,
            customerSelectionMode: 'S',
            customersSelected: [],
            selectedCustomerABN: null,
            reportTypesSelected: [],
            periodFrom: null,
            periodTo: null,
            searchCode: 'All'
        })
    }

    function closeReporterModal() {
    setReporterModalShow(false);
    }

    function openCreatorModal() {

        setCreatorRequest({
            isNewUser: true,
            isATOSetup: false,
            customerSelectionMode: 'S',
            customersSelected: [],
            selectedCustomerABN: null,
            financialYear: '2023'
        
        })
    }

    function closeCreatorModal() {
        setCreatorModalShow(false);
    }
    
    useEffect(() => {
        if (JSON.stringify(reporterRequest) != '{}') {
          setReporterModalShow(true);
        }
    }, [reporterRequest]);

    useEffect(() => {
        console.log(creatorRequest)
        if (JSON.stringify(creatorRequest) != '{}') {
          setCreatorModalShow(true);
        }
    }, [creatorRequest]);


    return (
        <>
        <div style={{textAlign: 'center'}}>
            <p style={{fontWeight: '700', fontSize: '2.5rem', marginTop: '7vh', marginBottom: '7vh'}}>Meet our digital accountants</p>
            <div style={{display: 'flex', flexDirection: 'row', margin: '0 5vw'}}>

                <div className="flip-card" style={{ height: '70vh', flex: 1, marginRight: '3vw', border: 'none'}}>
                    <div className="flip-card-inner" style={{flex: 1}}>
                        <div className="flip-card-front" style={{flex: 1, border: '3px solid #4b2976', marginRight: '3vw', borderRadius: '30px', transition: '0.2s', display: 'flex', flexDirection: 'column', backgroundColor: 'transparent'}}>
                            <div style={{flex: 3}}>
                                <img style={{border: '2px solid #ee7170',width: '20vh', borderRadius: '20vw', marginTop: '10vh', padding: '10px'}} src={require('../../resources/Suzzie.png')}/>
                                {/* <img style={{border: '2px solid #ee7170',width: '20vh', borderRadius: '20vw', marginTop: '8vh', padding: '8px'}} src={require('../../resources/CustomerTemplate.xlsx')}/> */}
                            </div>
                            <div style={{marginTop: '10px', flex: 2}}>
                                <p style={{fontSize: '2.2rem', fontWeight: '600', color: 'white'}}>Suzzie</p>
                                <p style={{color: '#ee7170', fontSize: '1.2rem', fontWeight: '500'}}>The ATO Reporter</p>
                            </div>
                        </div>
                        <div class="flip-card-back" style={{flex: 1, border: '3px solid #4b2976', marginRight: '3vw', borderRadius: '30px', transition: '0.2s', display: 'flex', flexDirection: 'column', backgroundColor: 'transparent'}}>
                            <div style={{flex: 5, display: 'flex', flexDirection: 'column', marginTop: '40px', marginLeft: '35px', marginRight: '35px'}}>
                                <p style={{fontSize: '2.2rem', fontWeight: '600', color: 'white'}}>Suzzie</p>
                                <p style={{color: '#ee7170', fontSize: '1.2rem', fontWeight: '500', marginBottom: '40px'}}>The ATO Reporter</p>
                                <p style={{fontSize: '1.2rem', lineHeight: '2.5rem'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                            <div style={{flex: 1}}>
                                <Button onClick={openReporterModal} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="outline-primary">
                                    Meet Suzzie
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div style={{flex: 1, border: '3px solid #4b2976', borderRadius: '30px', height: '70vh', transition: '0.2s', display: 'flex', flexDirection: 'column'}}>
                    <div style={{flex: 3}}>
                        <img style={{border: '2px solid #ee7170',width: '20vh', borderRadius: '20vw', marginTop: '8vh', padding: '8px'}} src={require('../../resources/Susan.png')}/>
                    </div>
                    <div style={{marginTop: '10px', flex: 2}}>
                        <p style={{fontSize: '2.2rem', fontWeight: '600'}}>Susan</p>
                        <p style={{color: '#ee7170', fontSize: '1.2rem', fontWeight: '500'}}>The Workpaper Creator</p>
                    </div>
                    <div style={{flex: 1}}>
                        <Button onClick={openCreatorModal} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="outline-primary">
                            Meet Susan
                        </Button>
                    </div>
                </div> */}

                <div className="flip-card" style={{ height: '70vh', flex: 1, border: 'none', marginRight: '3vw'}}>
                    <div className="flip-card-inner" style={{flex: 1}}>
                        <div className="flip-card-front" style={{flex: 1, border: '3px solid #4b2976', marginRight: '3vw', borderRadius: '30px', transition: '0.2s', display: 'flex', flexDirection: 'column', backgroundColor: 'transparent'}}>
                            <div style={{flex: 3}}>
                                <img style={{border: '2px solid #ee7170',width: '20vh', borderRadius: '20vw', marginTop: '10vh', padding: '10px'}} src={require('../../resources/Susan.png')}/>
                            </div>
                            <div style={{marginTop: '10px', flex: 2}}>
                                <p style={{fontSize: '2.2rem', fontWeight: '600', color: 'white'}}>Susan</p>
                                <p style={{color: '#ee7170', fontSize: '1.2rem', fontWeight: '500'}}>The Workpaper Creator</p>
                            </div>
                        </div>
                        <div class="flip-card-back" style={{flex: 1, border: '3px solid #4b2976', marginRight: '3vw', borderRadius: '30px', transition: '0.2s', display: 'flex', flexDirection: 'column', backgroundColor: 'transparent'}}>
                            <div style={{flex: 5, display: 'flex', flexDirection: 'column', marginTop: '40px', marginLeft: '35px', marginRight: '35px'}}>
                                <p style={{fontSize: '2.2rem', fontWeight: '600', color: 'white'}}>Susan</p>
                                <p style={{color: '#ee7170', fontSize: '1.2rem', fontWeight: '500', marginBottom: '40px'}}>The Workpaper Creator</p>
                                <p style={{fontSize: '1.2rem', lineHeight: '2.5rem'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                            <div style={{flex: 1}}>
                                <Button onClick={openCreatorModal} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="outline-primary">
                                    Meet Susan
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div style={{flex: 1, border: '3px solid #4b2976', marginLeft: '3vw', borderRadius: '30px', height: '70vh', transition: '0.2s', display: 'flex', flexDirection: 'column'}}>
                    <div style={{flex: 3}}>
                        <img style={{border: '2px solid #ee7170',width: '20vh', borderRadius: '20vw', marginTop: '8vh', padding: '8px'}} src={require('../../resources/Marvin.png')}/>
                    </div>
                    <div style={{marginTop: '10px', flex: 2}}>
                        <p style={{fontSize: '2.2rem', fontWeight: '600'}}>Marvin</p>
                        <p style={{color: '#ee7170', fontSize: '1.2rem', fontWeight: '500'}}>The Document Classifer</p>
                    </div>
                    <div style={{flex: 1}}>
                        <Button onClick={openCreatorModal} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="outline-primary">
                            Meet Marvin
                        </Button>
                    </div>
                </div> */}

                
                <div className="flip-card" style={{ height: '70vh', flex: 1, border: 'none'}}>
                    <div className="flip-card-inner" style={{flex: 1}}>
                        <div className="flip-card-front" style={{flex: 1, border: '3px solid #4b2976', marginRight: '3vw', borderRadius: '30px', transition: '0.2s', display: 'flex', flexDirection: 'column', backgroundColor: 'transparent'}}>
                            <div style={{flex: 3}}>
                                <img style={{border: '2px solid #ee7170',width: '20vh', borderRadius: '20vw', marginTop: '10vh', padding: '10px'}} src={require('../../resources/Marvin.png')}/>
                            </div>
                            <div style={{marginTop: '10px', flex: 2}}>
                                <p style={{fontSize: '2.2rem', fontWeight: '600', color: 'white'}}>Marvin</p>
                                <p style={{color: '#ee7170', fontSize: '1.2rem', fontWeight: '500'}}>The Document Classifer</p>
                            </div>
                        </div>
                        <div class="flip-card-back" style={{flex: 1, border: '3px solid #4b2976', marginRight: '3vw', borderRadius: '30px', transition: '0.2s', display: 'flex', flexDirection: 'column', backgroundColor: 'transparent'}}>
                            <div style={{flex: 5, display: 'flex', flexDirection: 'column', marginTop: '40px', marginLeft: '35px', marginRight: '35px'}}>
                                <p style={{fontSize: '2.2rem', fontWeight: '600', color: 'white'}}>Marvin</p>
                                <p style={{color: '#ee7170', fontSize: '1.2rem', fontWeight: '500', marginBottom: '40px'}}>The Document Classifer</p>
                                <p style={{fontSize: '1.2rem', lineHeight: '2.5rem'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                            <div style={{flex: 1}}>
                                <Button onClick={openCreatorModal} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="outline-primary">
                                    Meet Marvin
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>

        <ATOReporter isShow={isReporterModalShow} onClose={closeReporterModal} request={reporterRequest}/>

        <WorkpaperCreator isShow={isCreatorModalShow} onClose={closeCreatorModal} request={creatorRequest}/>

        </>
        
    )
}