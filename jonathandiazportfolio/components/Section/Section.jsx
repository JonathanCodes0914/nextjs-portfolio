import React from 'react'
import Image from 'next/image';
import styles from './SectionStyles.module.css';
import Animation from '../Animation/Animation';

const Section = () => {
    return (
        <div className={styles.sectionWrapper}> 
        
            <div className={styles.sectionLeftRightWrapper}>
           
            <div className={styles.SectionLeft}>
            <h1>Welcome take a look !</h1>
        <p>Join me discovering what i've been up to ! My journy as a software developer ! All the cool things i've built the last few years, progressing not only as a developer but as a person.</p>
        <button>Discover More</button>
            </div>
            <div className={styles.SectionRight}>
            <Animation />
            </div>
            </div>
        </div>
    )
}

export default Section
