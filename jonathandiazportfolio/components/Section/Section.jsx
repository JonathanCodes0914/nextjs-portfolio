import React from 'react'
import Image from 'next/image';
import styles from './SectionStyles.module.css';
import Animation from '../Animation/Animation';

const Section = () => {
    return (
        <div className={styles.sectionWrapper}> 
        <h1>Welcome take a look !</h1>
            <div className={styles.SectionLeft}>
        
        <p>Join me discovering what i've been up to ! My journy as a software developer ! All the cool things i've built the last few years, progressing not only as a developer but as a person.</p>
        <button>Discover More</button>
            </div>
            <div className={styles.SectionRight}>
            {/* <Animation /> */}
            </div>
        </div>
    )
}

export default Section
