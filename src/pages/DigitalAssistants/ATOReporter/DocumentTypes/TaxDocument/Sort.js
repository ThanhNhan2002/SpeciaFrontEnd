
import { React, useState, useEffect } from 'react'

import Form from 'react-bootstrap/Form';



export default (props) => {

    const [ sortOrderCode, setSortOrderCode ] = useState(props.request.recordSortOrderCode)

    const [ sortFieldCode, setSortFieldCode ] = useState(props.request.recordSortFieldCode)

    function updateSortOrderCode(event){
        // console.log(event.target.value)
        setSortOrderCode(event.target.value)
    }

    function updateSortFieldCode(event){

        // console.log(event.target.value)
        setSortFieldCode(event.target.value)
    }

    useEffect(() => {
        props.onUpdateSortFieldCode(sortFieldCode)
    }, [sortFieldCode])

    useEffect(() => {
        props.onUpdateSortOrderCode(sortOrderCode)
    }, [sortOrderCode])

    return (
        <>
            <p>Please specify how you want the records to be sorted</p>
            <div style={{width: '15%', paddingTop: '20px'}}>
                <p>Sort by</p>
                <Form.Select onChange={updateSortFieldCode} value={sortFieldCode} style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} aria-label="Floating label select example">
                    <option value="ProcessDate">Process Date</option>
                    <option value="EffectiveDate">Effective Date</option>
                </Form.Select>
                <br/>
                <p>Order</p>
                <Form.Select onChange={updateSortOrderCode} value={sortOrderCode} style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} aria-label="Floating label select example">
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </Form.Select>
            </div>
        </>
    )
}