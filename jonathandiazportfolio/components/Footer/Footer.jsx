import React from 'react'
import Link from 'next/link';
import styles from './FooterStyles.module.css';
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            
            <div className={styles.footerContact}>
                <span> <h4>Call</h4>  <p>
                    407-486-0790
                </p></span>

                <span>

                    <h4>Email</h4>
                    <p>jonathandiaz0914@gmail.com</p>
                </span>


            </div>

            <div className={styles.footerLinks}>
                    <span>
                    <Link href='https://www.linkedin.com/in/jonathan-diaz-46a7ba15b/'>
                        <AiOutlineLinkedin size='3rem' />
                    </Link>
                    </span>
                    <span>
                    <Link  href='https://github.com/JonathanCodes0914'>
                        <AiOutlineGithub size='3rem' />
                    </Link>
                    </span>
            </div>
        </div>
    )
}



export default Footer