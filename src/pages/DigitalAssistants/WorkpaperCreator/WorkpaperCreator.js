import Modal from 'react-bootstrap/Modal';

export default (props) => {
    return (
        <Modal show={props.isShow} fullscreen={true} onHide={props.onClose}>
            <Modal.Header style={{borderBottom: '1px solid #261943'}} closeButton>
                <Modal.Title style={{color: '#ee7170'}}>Suzzie - The Workpaper Creator</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
        </Modal>
    )
}