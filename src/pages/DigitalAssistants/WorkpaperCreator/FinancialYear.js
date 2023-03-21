
import { React, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'


const financialYears = ['2017', '2018', '2019', '2020', '2021', '2022', '2023']

export default (props) => {

    const [selectedYear, setSelectedyear] = useState(props.request.financialYear)

    function updateYear(event){

        setSelectedyear(event.target.value)
    }

      useEffect(() => {
        props.onUpdateYear(selectedYear)
      }, [selectedYear]);

    return (
        <>
            <p>Please specify the financial year you want me to create the workpaper for.</p>
            <div style={{width: '600px', paddingTop: '20px'}}>
            <Form.Select style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} value={selectedYear} onChange={updateYear} aria-label="Default select example">
                {financialYears.map(year => 
                    <option value={year}>{year}</option>
                )}
            </Form.Select>
            </div>
        </>
    )
}