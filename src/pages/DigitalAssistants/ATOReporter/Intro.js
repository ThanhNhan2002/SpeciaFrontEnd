import { React, useState, useEffect } from 'react'

export default () => {


    const [ script, setScript ] = useState('I am a professional ATO Reporter. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.')



    return (
        <>
        <div>
            <p>Hi there,</p>
            <p>I am Marvin!</p>
            <p>{script}</p>
            <p>There is some information I need from you before I can start processing your request.</p>
            <p>Let's get started!</p>
        </div>
        </>
    )
}