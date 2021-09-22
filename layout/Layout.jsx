import React from 'react'
import styles from '../styles/Layout.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}


export default Layout