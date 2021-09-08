import React from 'react'
import Link from 'next/link'; ''
import styles from '../Header/HeaderStyles.module.css';
import { SiApacheairflow } from 'react-icons/si';
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai';

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerLinksWrapper}>
             
                   
                        <span className={styles.name}> <SiApacheairflow size='2rem' />   Jonathan Diaz</span>
                   
               
                <div className={styles.headerLinks}>
                   <span>
                   <Link href='https://www.linkedin.com/in/jonathan-diaz-46a7ba15b/'>
                        <AiOutlineLinkedin size='3rem' />
                    </Link>
                   </span>

                  <span>
                  <Link href='https://github.com/JonathanCodes0914'>
                        <AiOutlineGithub size='3rem'/>
                    </Link>
                  </span>
                </div>
            </div>

            <div className={styles.portfolioLinks}>
                <a>About</a>
                <a>Tech</a>
                <a>Projects</a>
            </div>
        </div>
    )
}


export default Header