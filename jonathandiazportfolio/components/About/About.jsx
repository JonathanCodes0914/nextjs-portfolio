import React from 'react';
import Timeline from '../Timeline/Timeline';
import styles from './AboutStyles.module.css';

const About = () => {
    return (
        <div id='about' className={styles.aboutWrapper}>
            <h1>About Me</h1>
            <div className={styles.underline}></div>
            <div className={styles.aboutText}>
                
                <p>A Continuously growing passion and experience in Software Development for 2 years. Excited to expand my knowledge and continue my education in the field. Looking to further develop my skills as a developer and gain experience as i work. Experienced in working with both Front-End and Back-End technologies, specialized in JavaScript and always seeking to expand on my current knowledge base.</p>
            </div>

            <div className={styles.aboutTimeline}>
               <Timeline />
            </div>
        </div>
    )
}

export default About
