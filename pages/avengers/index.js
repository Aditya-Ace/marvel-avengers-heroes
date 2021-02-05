import Head from 'next/head';
import style from '../../styles/avengers.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: {
      avengers: data,
    },
  };
};

export default function Avengers({ avengers }) {
  return (
    <>
      <Head>
        <title>Avengers Assemble</title>
        <meta name='keywords' content='avengers' />
      </Head>
      <div>
        <h1>Avengers Assemble</h1>
        {avengers.map((avenger) => (
          <Link href={`/avengers/${avenger.id}`} key={avenger.id}>
            <a className={style.single}>
              <h3>{avenger.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
