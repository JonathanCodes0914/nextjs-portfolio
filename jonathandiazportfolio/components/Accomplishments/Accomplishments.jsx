import React from 'react'
import styles from './AccomplishmentsStyles.module.css';
const Accomplishments = () => {
    return (
        <div className={styles.accomplishmentsWrapper}>
            <h1>Personal Accomplishments</h1>
           
            <div className={styles.accomplishmentsBlock}><h2>2 </h2> Real World Applications...</div>
            <div className={styles.accomplishmentsBlock}><h2>2+ </h2> Years of experience...</div>
            <div className={styles.accomplishmentsBlock}><h2>1  </h2> Certificate...</div>
            <div className={styles.accomplishmentsBlock}><h2>∞</h2>Lines of code...</div>
        </div>
    )
}

export default Accomplishments
