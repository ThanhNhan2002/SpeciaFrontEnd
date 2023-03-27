
import { React, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import Button from 'react-bootstrap/Button';


import Modal from 'react-bootstrap/Modal';



const financialYears = []

for(let year=2023; year>1969; year--){
    financialYears.push(year.toString())
}

export default (props) => {

    const [selectedYear, setSelectedyear] = useState(props.request.financialYear)

    function updateYear(event){

        setSelectedyear(event.target.value)
    }

      useEffect(() => {
        props.onUpdateYear(selectedYear)
      }, [selectedYear]);

      function onContinueHandler(){
        props.onContinue()
    }


    return (
        <>
            <Modal.Body style={{padding: '50px 100px', fontSize: '1.6rem', lineHeight: '2.8rem'}}>
                <p>Please specify the financial year you want me to create the workpaper for.</p>
                <div style={{width: '600px', paddingTop: '20px'}}>
                <Form.Select style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} value={selectedYear} onChange={updateYear} aria-label="Default select example">
                    {financialYears.map(year => 
                        <option value={year}>{year}</option>
                    )}
                </Form.Select>
                </div>
            </Modal.Body>
            <Modal.Footer style={{borderTop: 0, paddingBottom: '50px', paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px'}}>
                <div style={{display: 'flex', flex: 1, textAlign: 'right'}}>
                    <div style={{flex: 1}}>
                        <Button onClick={props.onBack} style={{padding: '15px 35px', borderRadius: '50px'}} variant="outline-primary">
                            Previous Step
                        </Button>
                    {/* </div>
                    <div style={{flex: 1, textAlign: 'right'}}> */}
                        <Button onClick={onContinueHandler} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px', marginLeft: '20px'}} variant="primary">
                            Next Step
                        </Button>
                    </div>
                </div>
            </Modal.Footer>
        </>
    )
}