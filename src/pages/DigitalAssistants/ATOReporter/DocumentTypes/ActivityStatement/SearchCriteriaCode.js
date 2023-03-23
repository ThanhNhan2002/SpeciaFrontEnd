
import { React, useState, useEffect } from 'react'

import Form from 'react-bootstrap/Form';



export default ({request, onUpdateSearchCode}) => {

    const [ searchCode, setSearchCode ] = useState(request)


    function updateSearchCode(event){

        setSearchCode(event.target.value)
    }

    useEffect(() => {
        onUpdateSearchCode(searchCode)
    }, [searchCode])


    return (
        <>
            <p>Please specify search criteria code</p>
            <div style={{width: '15%', paddingTop: '20px'}}>
                <Form.Select onChange={updateSearchCode} value={searchCode} style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} aria-label="Floating label select example">
                    <option value="All">All</option>
                    <option value="Unlodged">Unlodged</option>
                    <option value="Historical">Historical</option>
                </Form.Select>
            </div>
        </>
    )
}