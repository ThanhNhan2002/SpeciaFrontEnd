
import { React, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

export default (props) => {

    const [abn, setAbn] = useState(props.request.ABN)

    function updateAbn(event){

        setAbn(event.target.value)
    }

      useEffect(() => {
        props.onUpdateAbn(abn)
      }, [abn]);

    return (
        <>
            <p>Please provide your Australian Business Number - ABN</p>
            <div style={{width: '600px', paddingTop: '20px'}}>
            <Form.Control type="text" style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} value={abn} onChange={updateAbn} aria-label="ABN" placeholder='ABN'>
            </Form.Control>
            </div>
        </>
    )
}