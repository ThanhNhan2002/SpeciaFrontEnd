import { React, useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

const lines = ['Hi there,', 
        'I am Marvin!', 
        'I am a professional ATO Reporter. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
        'There is some information I need from you before I can start processing your request.',
        "Let's get started!"
    ]



export default ({closeModal, onContinue}) => {


    const [ script, setScript ] = useState('')

    const [ currentLineIdx, setCurrentLineIdx ] = useState(0)

    const [ dialog, setDialog ] = useState(['', '', '', '', ''])



    // useEffect(() => {
    //      set
    // }, [currentLineIdx])



    return (
        <>
        <Modal.Body style={{padding: '50px 100px', fontSize: '1.6rem', lineHeight: '2.8rem'}}>
            {lines.map(line =>
                <p>{line}</p>
            )}
         </Modal.Body>
            <Modal.Footer style={{borderTop: 0, paddingBottom: '50px', paddingLeft: '100px', paddingRight: '100px'}}>
                <div style={{display: 'flex', flex: 1}}>
                    <div style={{flex: 1}}>
                        <Button onClick={closeModal} style={{padding: '15px 35px', borderRadius: '50px'}} variant="outline-primary">
                            Cancel
                        </Button>
                    </div>
                    <div style={{flex: 1, textAlign: 'right'}}>
                        <Button onClick={onContinue} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="primary">
                            Next Step
                        </Button>
                    </div>
                </div>
            </Modal.Footer>

        </>
    )
}