import React from 'react';
import styles from './TechnologiesStyles.module.css';
import {VscBrowser, VscCircuitBoard, VscCompareChanges} from 'react-icons/vsc';


const Technologies = () => {
    return (
        <div id='tech' className={styles.technologiesWrapper}>
              <h1>Technologies</h1>
              <div className={styles.underline}></div>
            <div className={styles.technologiesText}>
              
            <p>I've gained experience with a span of technologies in web development. From Front-End development, creating Reusable Components and layouts to Back-End development creating Restful API's - CRUD applications and data models. </p>
            </div>

            <div className={styles.technologiesStack}>
                <ul>
                    <li>
                       <h3> <VscBrowser size='1rem'/> Front-End</h3>
                        
                        <p>Experienced with ReactJs, Nextjs, and State Managing Libraries for user interfaces. </p>
                    </li>
                    <li>
                        <h3><VscCircuitBoard /> Back-End</h3 >
                        
                        <p>Experienced with NodeJs, NPM, MongoDB, Firebase, Express.</p>
                    </li>
                    <li>
                        <h3><VscCompareChanges /> API's </h3>
                       
                        <p>
                            Experienced with building RESTFUL API's & 3rd party API integrations.

                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Technologies
