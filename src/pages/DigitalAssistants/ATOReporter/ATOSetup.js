import Button from 'react-bootstrap/Button';


import Modal from 'react-bootstrap/Modal';

export default (props) => {

    function update_access(){
        props.onStatusUpdate(true)
    }

    return (
        <>
            <Modal.Body style={{margin: '50px 50px', fontSize: '1.6rem', lineHeight: '2.8rem'}}>
                <p>Please follow the instructions below to set up your ATO access.</p>
                <br/>
                <p>- Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                <p>- The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                <p>- There are many variations of passages of Lorem Ipsum available.</p>
                <br/>
                <p>Once you have completed all the steps, please check you access.</p>
                <br/>
                <Button onClick={update_access} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="outline-primary">
                    Check my ATO access
                </Button>
            </Modal.Body>
            <Modal.Footer style={{borderTop: 0, marginBottom: '15px', marginLeft: '15px', marginRight: '15px'}}>
                <div style={{display: 'flex', flex: 1}}>
                    <div style={{flex: 1}}>
                        <Button onClick={props.onBack} style={{padding: '15px 35px', borderRadius: '50px'}} variant="outline-primary">
                            Previous Step
                        </Button>
                    </div>
                    <div style={{flex: 1, textAlign: 'right'}}>
                        <Button onClick={props.onContinue} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="primary">
                            Next Step
                        </Button>
                    </div>
                </div>
            </Modal.Footer>
        </>
    )
}