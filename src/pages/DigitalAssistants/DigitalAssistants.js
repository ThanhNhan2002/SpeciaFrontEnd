import React from 'react';

import styles from './DigitalAssistants.module.css'

export default () => {
    return (
        <div style={{textAlign: 'center'}}>
            <p style={{fontWeight: '700', fontSize: '2.5rem', marginTop: '7vh', marginBottom: '7vh'}}>Digital Assistants</p>
            <div style={{display: 'flex', flexDirection: 'row', margin: '0 5vw'}}>
                <div className={styles.boxHover} style={{flex: 1, border: '2px solid white', marginRight: '3vw', borderRadius: '30px'}}>

                </div>
                <div style={{flex: 1, border: '2px solid white', marginLeft: '3vw', borderRadius: '30px', height: '70vh'}}>

                </div>
            </div>
        </div>
    )
}