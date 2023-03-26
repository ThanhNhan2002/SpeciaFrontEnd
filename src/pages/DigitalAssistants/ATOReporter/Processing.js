import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';


export default ({closeModal, onSeeAllRequests}) => {
    return (
        <>
            <Modal.Body style={{padding: '50px 100px', fontSize: '1.6rem', lineHeight: '2.8rem'}}>
                <p>Your request is being processed ...</p>
            </Modal.Body>
            <Modal.Footer style={{borderTop: 0, paddingBottom: '50px', paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px'}}>
                <div style={{display: 'flex', flex: 1, textAlign: 'right'}}>
                    <div style={{flex: 1}}>
                        <Button onClick={closeModal} style={{padding: '15px 35px', borderRadius: '50px'}} variant="outline-primary">
                            Home
                        </Button>
                    {/* </div>
                    <div style={{flex: 1, textAlign: 'right'}}> */}
                        <Button onClick={onSeeAllRequests} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px', marginLeft: '20px'}} variant="primary">
                            All Requests
                        </Button>
                    </div>
                </div>
            </Modal.Footer>
        </>
    )
}