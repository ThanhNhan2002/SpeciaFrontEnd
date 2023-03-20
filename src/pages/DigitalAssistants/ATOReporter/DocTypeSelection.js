import Form from 'react-bootstrap/Form';

export default () => {
    return (
        <>
            <p>Please select the types of report you want me to process.</p>
            <div>
                <div style={{marginTop: 'auto', marginBottom: 'auto'}}>
                    <Form.Check.Input type='checkbox'/>
                    <Form.Check.Label>Business Activity Statements - BAS</Form.Check.Label>
                </div>
                <div>
                    <Form.Check.Input type='checkbox' />
                    <Form.Check.Label>Integrated Client Account - ICA</Form.Check.Label>
                </div>
                <div>
                    <Form.Check.Input type='checkbox' />
                    <Form.Check.Label>Income Tax Assessment - ITA</Form.Check.Label>
                </div>
                <div>
                    <Form.Check.Input type='checkbox'/>
                    <Form.Check.Label>General Interest - GI</Form.Check.Label>
                </div>
            </div>
        </>
    )
}