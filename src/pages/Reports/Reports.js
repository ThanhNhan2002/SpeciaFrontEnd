import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'


function Reports () {
    return (
        <div style={{textAlign: 'center'}}>
            <p style={{fontWeight: '700', fontSize: '2.5rem', marginTop: '7vh', marginBottom: '7vh'}}>See the requests of</p>
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
                        <Link to='/reports/ATOrequests'>
                            <Button style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="outline-primary">
                                See Marvin's request
                            </Button>
                        </Link>
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
                        <Button style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="outline-primary">
                            See Suzzie's request
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reports;