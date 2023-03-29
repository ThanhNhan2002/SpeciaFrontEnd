import { useState, useEffect, React } from 'react'

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';


import Modal from 'react-bootstrap/Modal';
import MessageModal from '../../../utils/MessageModal';

const customers = [{id: 1, companyName: 'Company 1', ABN: '0123456789'},
                    {id: 2, companyName: 'Company 2', ABN: '0123456789'},
                    {id: 3, companyName: 'Company 3', ABN: '0123456789'},
                    {id: 4, companyName: 'Company 4', ABN: '0123456789'},
                    {id: 5, companyName: 'Company 5', ABN: '0123456789'},
                    {id: 6, companyName: 'Company 6', ABN: '0123456789'}
                    ]


export default (props) => {

    const [ messageShow, setMessageShow ] = useState(false)

    const [ errorMessage, setErrorMessage ] = useState('')

    const [ errorDescription, setErrorDescription ] = useState('')

    const [selectedUsers, setSelectedUsers ] = useState(props.request.customersSelected)

    const [ isSingleCust, setIsSingleCust ] = useState(props.request.customerSelectionMode == 'S')


    const [ selectedCustomerABN, setSelectedCustomerABN ] = useState(props.request.selectedCustomerABN)


    function userAddedDeleted(customer){
        let newUserList = [...selectedUsers]
        if (newUserList.find(cust => cust.id == customer.id)){
            newUserList = newUserList.filter(item => item.id != customer.id)
        }else{
            newUserList.push({...customer})
        }
        setSelectedUsers(newUserList)
        
    }

    function selectSingle(){
        console.log('select multiple')
        setIsSingleCust(true)
        props.onUpdateCustomerSelectionMode('S')
    }

    function selectMultiple(){
        setIsSingleCust(false)
        props.onUpdateCustomerSelectionMode('M')
    }

    function changeSelectedCustomerABN(e){
        setSelectedCustomerABN(e.target.value)
    }

    function continueHandler(){
        if(isSingleCust && !selectedCustomerABN){
            setErrorDescription('Please provide the customer ABN to continue')
            setErrorMessage('Missing ABN')
            setMessageShow(true)
        }else if(!isSingleCust && selectedUsers.length == 0){
            setErrorDescription('Please select at least one customer to continue')
            setErrorMessage('No customer selected')
            setMessageShow(true)
        }else{
            props.onContinue()
        }
    }

    useEffect(() => {
        props.onUpdateCustomersSelected(selectedUsers)
    }, [selectedUsers]);

    useEffect(() => {
        props.onUpdateSelectedCustomerABN(selectedCustomerABN)
    }, [selectedCustomerABN]);

    return (
        <>  
            <Modal.Body className='mainContainer' style={{paddingTop: '50px', paddingLeft: '100px', paddingRight: '100px', paddingBottom: 0, fontSize: '1.6rem', lineHeight: '2.8rem'}}>
                <p>Please select the customers you want me to process the reports for.</p>
                <div style={{margin: '40px 0'}}>
                    <ToggleButton
                        type="radio"
                        variant="outline-primary"
                        name="radio"
                        checked={isSingleCust} 
                        onClick={selectSingle}
                        style={{padding: '12px 35px', borderRadius: '50px', marginRight: '15px'}}
                    >
                        Single
                    </ToggleButton>

                    <ToggleButton
                        type="radio"
                        variant="outline-primary"
                        name="radio"
                        checked={!isSingleCust}
                        onClick={selectMultiple}
                        style={{padding: '12px 35px', borderRadius: '50px'}}
                    >
                        Multiple
                    </ToggleButton>

                </div>


                { isSingleCust && <div style={{width: '40%'}}>
                    <p style={{fontSize: '1.2rem'}}>Please provide customer name</p>
                    <Form.Control disabled={!isSingleCust} onChange={changeSelectedCustomerABN} value={selectedCustomerABN} type="text" style={{ color: 'white' ,height: '60px', backgroundColor: 'rgba(255,255,255,.2)', borderRadius: '8px', border: 0, fontSize: '1.1rem', paddingLeft: '20px'}} aria-label="Customer Name" placeholder='Customer Name'>
                    </Form.Control>
                </div>}

                { !isSingleCust && 
                
                <div>
                    <p style={{fontSize: '1.2rem'}}>Please select customers</p>
                    <table className="table table-striped" style={{color: 'black', fontSize: '1.1rem', width: '40%', backgroundColor: 'white', borderRadius: '20px'}}>
                        <thead style={{color: '#ee7170'}}>
                            <tr>
                            <th style={{paddingLeft: '2vw', paddingRight: '2vw'}} scope="col">Client Name</th>
                            <th style={{paddingLeft: '2vw', paddingRight: '2vw'}} scope="col">ABN</th>
                            <th style={{paddingLeft: '2vw', paddingRight: '2vw'}} scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer) => (
                                <tr>
                                    <td style={{paddingLeft: '2vw', paddingRight: '2vw'}}>{customer.companyName}</td>
                                    <td style={{paddingLeft: '2vw', paddingRight: '2vw'}}>{customer.ABN}</td>
                                    <td style={{paddingLeft: '2vw', paddingRight: '2vw'}}><Form.Check onChange={userAddedDeleted.bind(this, customer)} inline type='checkbox' checked={selectedUsers.find(cust => cust.id == customer.id)}/></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>}
            </Modal.Body>
            <Modal.Footer style={{borderTop: 0, paddingBottom: '50px', paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px'}}>
                <div style={{display: 'flex', flex: 1}}>
                    <div style={{flex: 1, textAlign: 'right'}}>
                        <Button onClick={props.onBack} style={{padding: '15px 35px', borderRadius: '50px'}} variant="outline-primary">
                            Previous Step
                        </Button>
                    {/* </div>
                    <div style={{flex: 1, textAlign: 'right'}}> */}
                        <Button onClick={continueHandler} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px', marginLeft: '20px'}} variant="primary">
                            Next Step
                        </Button>
                    </div>
                </div>
            </Modal.Footer>
            <MessageModal show={messageShow} onClose={() => {setMessageShow(false)}} message={errorMessage} description={errorDescription}></MessageModal>
        </>
    )
}