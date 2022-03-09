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
            <a  target="_blank" rel="noopener noreferrer" href='https://docs.google.com/document/d/1D3vs5_fefi71YpGNdm0RiHTVUQ8fHDeIKiy8gcF-Gek/edit?usp=sharing'>
                        <button style={{height: '35px', marginTop: '9px', fontWeight: 'bold', fontSize: 'large', backgroundColor: 'black', color: 'white'}}>Resume</button>
                    </a>
                    </span>
                    <span>
                    <a   target="_blank" rel="noopener noreferrer"  href='https://www.linkedin.com/in/jonathan-diaz-46a7ba15b/'>
                        <AiOutlineLinkedin size='3rem' />
                    </a>
                    </span>
                    <span>
                    <a  target="_blank" rel="noopener noreferrer"  href='https://github.com/JonathanCodes0914'>
                        <AiOutlineGithub size='3rem' />
                    </a>
                    </span>
            </div>
        </div>
    )
}



export default Footer