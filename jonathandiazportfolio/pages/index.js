import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout  from '../layout/layout'
import Section from '../components/Section/Section';
import About from '../components/About/About';
import Technologies from '../components/Technologies/Technologies';
import Projects from '../components/Projects/Projects';
import Accomplishments from '../components/Accomplishments/Accomplishments';

const Home = () => {
  return (
     <Layout>
      <Section />
      <About />
      <Technologies />
      <Projects />
      <Accomplishments />
     </Layout>
    
  )
}

export default Home