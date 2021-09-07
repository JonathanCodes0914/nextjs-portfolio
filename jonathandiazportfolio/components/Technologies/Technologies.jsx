import React from 'react';
import styles from './TechnologiesStyles.module.css';

const Technologies = () => {
    return (
        <div className={styles.technologiesWrapper}>
            <div className={styles.technologiesText}>
                <h1>Technologies</h1>
            <p>I've gained experience with a range of technologies in web development. From Front-End development, creating Reusable Components and layouts to Back-End development creating Restful APIS - CRUD applications and data models. </p>
            </div>

            <div className={styles.technologiesStack}>
                <ul>
                    <li>
                        <h3>Front-End</h3>
                        
                        <p>Experienced with ReactJs, Nextjs, and State Managing Libraries for user interfaces. </p>
                    </li>
                    <li>
                        <h3>Back-End</h3 >
                        
                        <p>Experienced with NodeJs, NPM, MongoDB, Firebase, Express</p>
                    </li>
                    <li>
                        <h3>API's </h3>
                       
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Technologies
