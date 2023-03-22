import { React, useState, useEffect } from 'react'

const lines = ['Hi there,', 
        'I am Marvin!', 
        'I am a professional ATO Reporter. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
        'There is some information I need from you before I can start processing your request.',
        "Let's get started!"
    ]



export default () => {


    const [ script, setScript ] = useState('')

    const [ currentLineIdx, setCurrentLineIdx ] = useState(0)

    const [ dialog, setDialog ] = useState(['', '', '', '', ''])



    // useEffect(() => {
    //      set
    // }, [currentLineIdx])



    return (
        <>
        <div>
            {lines.map(line =>
                <p>{line}</p>
            )}
        </div>
        </>
    )
}