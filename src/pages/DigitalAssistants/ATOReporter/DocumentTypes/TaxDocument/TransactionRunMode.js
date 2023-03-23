
import { React, useState, useEffect } from 'react'

import Form from 'react-bootstrap/Form';


const allRunModes = [
    {
        name: 'Normal mode',
        sym: 'N',
        description: 'Returns the list of transactions without Aggregation'
    },
    {
        name: 'Aggregate mode',
        sym: 'A',
        description: 'Aggregate mode will list aggregated transactions ( transactions aggregated into single transaction)'
    }
]


export default (props) => {

    const [ runMode, setRunMode ] = useState(props.request.runMode)

    const [ aggregationCode, setAggregationCode ] = useState(props.request.aggregationCode)

    function switchMode(newMode){
        setRunMode(newMode)
    }

    function updateAggregationCode(event){
        setAggregationCode(event.target.value)
    }

    useEffect(() => {
        props.onUpdateRunMode(runMode)
    }, [runMode])

    useEffect(() => {
        props.onUpdateAggregationCode(aggregationCode)
    }, [aggregationCode])

    return (
        <>
            <p>Please select a transaction run mode:</p>
            <div style={{width: '50%', paddingTop: '20px'}}>
                {allRunModes.map(mode =>
                    <div style={{display: 'flex', alignItems:'flex-start', paddingBottom: '20px'}}>
                        <Form.Check
                        type='radio'
                        checked={mode.sym == runMode}
                        onClick={switchMode.bind(this, mode.sym)}
                        style={{paddingTop: '3px'}}
                        />
                        <div style={{flex: '1', marginLeft: '20px'}}>
                            <p style={{margin: '0'}}>{mode.name}</p>
                            <p style={{margin: '0', fontSize: '1.2rem'}}>{mode.description}</p>
                        </div>
                    </div>
                )}
                { runMode == 'A' && 
                <div style={{width: '80%'}}>
                    <p style={{fontSize: '1.3rem'}}>Please provide the aggregation code</p>
                    <Form.Control type="text" style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} value={aggregationCode} onChange={updateAggregationCode} aria-label="Aggregation Code" placeholder='Aggregation Code'>
                </Form.Control>
                </div>}
            </div>
        </>
    )
}