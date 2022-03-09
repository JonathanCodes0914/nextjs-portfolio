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
              
                  <a target="_blank" rel="noopener noreferrer" href='https://docs.google.com/document/d/1D3vs5_fefi71YpGNdm0RiHTVUQ8fHDeIKiy8gcF-Gek/edit?usp=sharing'>
                        <button style={{height: '35px', marginTop: '9px', fontWeight: 'bold', fontSize: 'large', backgroundColor: 'black', color: 'white'}}>Resume</button>
                    </a>
                  </span>
                   <span>
                   <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/jonathan-diaz-46a7ba15b/'>
                        <AiOutlineLinkedin size='3rem' />
                    </a>
                   </span>

                  <span>
                  <a target="_blank" rel="noopener noreferrer" href='https://github.com/JonathanCodes0914'>
                        <AiOutlineGithub size='3rem'/>
                    </a>
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