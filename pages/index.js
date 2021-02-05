import { useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import Navbar from './../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Avengers | Home</title>
        <meta name='keywords' content='avengers' />
      </Head>
      <div className='home'>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora, quia possimus iure quasi
          voluptates consequuntur numquam in perspiciatis animi.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora, quia possimus iure quasi
          voluptates consequuntur numquam in perspiciatis animi.
        </p>
        <Link href='/avengers'>
          <a className={styles.btn}>Checkout Avengers</a>
        </Link>
      </div>
    </>
  );
}
