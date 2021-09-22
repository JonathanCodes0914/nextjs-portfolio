import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './SectionStyles.module.css';


const Section = () => {
    return (
        <div className={styles.sectionWrapper}>

            <div className={styles.sectionLeftRightWrapper}>

                <div className={styles.SectionLeft}>
                    <h1>Welcome take a look !</h1>
                    <p>Join me and discover what i've been up to ! My adventure as a web developer ! View all the awesome things i've built the last two years, progressing not only as a developer but as a person.</p>
                   <a href='#about'> <button>Discover More</button></a>
                </div>
                <div className={styles.SectionRight}>

                    <img width='600px' height='400px' src='https://static.scientificamerican.com/blogs/cache/file/9AA1FDBC-48FB-40FE-862C56A719C20CB8_source.jpg?w=590&h=800&73F8F0AF-4951-4631-82A9E1FF83FEBA00' />



                </div>
            </div>
        </div>
    )
}

export default Section
