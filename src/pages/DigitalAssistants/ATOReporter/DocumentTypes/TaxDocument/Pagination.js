
import { React, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

export default (props) => {

    const [limit, setLimit] = useState(props.request.limit)
    
    const [firstIdx, setFirstIdx] = useState(props.request.firstIdx)

    function updateLimit(event){

        setLimit(event.target.value)
    }

    function updateFirstIdx(event){

        setFirstIdx(event.target.value)
    }

      useEffect(() => {
        props.onUpdateLimit(limit)
      }, [limit]);

      useEffect(() => {
        props.onUpdateFirstIdx(firstIdx)
      }, [firstIdx]);

    return (
        <>
            <p>Please provide the maximum number of records to be returned and the first index</p>
            <div style={{width: '20%', paddingTop: '20px'}}>
                <p>Limit</p>
                <Form.Control type="number" style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} value={limit} onChange={updateLimit} aria-label="Limit" placeholder='Limit'>
                </Form.Control>
                <br/>
                <p>First Record Index</p>
                <Form.Control type="number" style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} value={firstIdx} onChange={updateFirstIdx} aria-label="First Index" placeholder='First Index'>
                </Form.Control>
            </div>
        </>
    )
}