
import { React, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

export default (props) => {

    const [tan, setTan] = useState(props.request.TAN)

    function updateTan(event){

        setTan(event.target.value)
    }

      useEffect(() => {
        props.onUpdateTan(tan)
      }, [tan]);

    return (
        <>
            <p>Please provide your Tax Agent Number - TAN</p>
            <div style={{width: '600px', paddingTop: '20px'}}>
            <Form.Control type="text" style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} value={tan} onChange={updateTan} aria-label="TAN" placeholder='TAN'>
            </Form.Control>
            </div>
        </>
    )
}