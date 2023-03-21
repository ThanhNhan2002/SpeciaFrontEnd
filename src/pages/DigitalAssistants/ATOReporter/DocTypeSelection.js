import { React, useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';


const reportTypes = [
    {
        name: 'Business Activity Statements',
        abbr: 'BAS'
    },
    {
        name: 'Integrated Client Account',
        abbr: 'ICA'
    },
    {
        name: 'Income Tax Assessment',
        abbr: 'ITA'
    },
    {
        name: 'General Interest',
        abbr: 'GI'
    },

]

export default (props) => {

    const [selectedTypes, setSelectedTypes ] = useState(props.request.reportTypesSelected)


    function typeAddedDeleted(type){
        let newTypesList = [...selectedTypes]
        if (newTypesList.includes(type)){
            newTypesList = newTypesList.filter(item => item != type)
        }else{
            newTypesList.push(type)
        }
        setSelectedTypes(newTypesList)
        
    }

    useEffect(() => {
        console.log(selectedTypes)
        props.onUpdateTypesSelected(selectedTypes)
    }, [selectedTypes]);


    return (
        <>
            <p>Please select the types of report you want me to process.</p>
            <div style={{marginTop: '20px'}}>
                { reportTypes.map((report) => <div style={{display: 'flex', alignItems:'center', marginBottom: '15px'}}>
                    { selectedTypes.includes(report.abbr) && <Form.Check.Input onChange={typeAddedDeleted.bind(this, report.abbr)} type='checkbox' style={{margin: 0, borderRadius: '50px'}} checked/>}
                    { !selectedTypes.includes(report.abbr) && <Form.Check.Input onChange={typeAddedDeleted.bind(this, report.abbr)} type='checkbox' style={{margin: 0, borderRadius: '50px'}}/>}
                    <Form.Check.Label style={{marginLeft: '10px'}}>{report.name} - {report.abbr}</Form.Check.Label>
                </div> )}
            </div>
        </>
    )
}