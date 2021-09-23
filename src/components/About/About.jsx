import React from 'react';
import Timeline from '../Timeline/Timeline';
import styles from './AboutStyles.module.css';

const About = () => {
    return (
        <div id='about' className={styles.aboutWrapper}>
            <h1>About Me</h1>
            <div className={styles.underline}></div>
            <div className={styles.aboutText}>

                <p>Continuously growing passion and experience in Software Development for 2 years and a proven knowledge

                    of application development, data communications, and database design. Experienced in working with both

                    front-end and back-end technologies, specialized in JavaScript. Excited to further develop my skills as a developer and gain experience at a great company.</p>
            </div>

            <div className={styles.aboutTimeline}>
                <Timeline />
            </div>
        </div>
    )
}

export default About
