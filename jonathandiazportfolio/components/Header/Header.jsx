import React from 'react'
import Link from 'next/link'; ''
import styles from '../Header/HeaderStyles.module.css';
import { SiApacheairflow } from 'react-icons/si';
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai';
import { GiAbstract024} from 'react-icons/gi';

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerLinksWrapper}>
                   
                         <h1>Jonathan Diaz</h1> 
               
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
                <Link href='#about'>About</Link>
                <Link href='#tech'>Tech</Link>
                <Link href='#projects'>Projects</Link>
            </div>
        </div>
    )
}


export default Header