import React from 'react'
import Link from 'next/link'; ''
import styles from '../Header/HeaderStyles.module.css';
import { DiCssdeck } from 'react-icons/di';
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai';

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerLinksWrapper}>
                <Link href=''>
                    <a>
                        <DiCssdeck size='2rem' /> <span className={styles.name}>Jonathan Diaz</span>
                    </a>
                </Link>
                <div className={styles.headerLinks}>
                    <Link href='https://www.linkedin.com/in/jonathan-diaz-46a7ba15b/'>
                        <AiOutlineLinkedin size='2rem' />
                    </Link>

                    <Link href='https://github.com/JonathanCodes0914'>
                        <AiOutlineGithub size='2rem'/>
                    </Link>
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