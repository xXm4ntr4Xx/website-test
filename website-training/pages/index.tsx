import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import About from '../components/About';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div id={'home'}className={styles.home}>
        <Main/>
        </div>
      <div id={'project'}className={styles.skills}>
        <Skills/>
        </div>
      <div id={'about'}className={styles.about}>
        <About/>
        </div>
      <div id={'contact'}className={styles.contact}>
        <Contact/>
        </div>
    </div>
  )
}

export default Home
