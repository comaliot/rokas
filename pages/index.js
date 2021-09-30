import Head from 'next/head';
import Button from '../components/Button';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rokas Samuolis</title>
        <meta
          name="description"
          content="Rokas Samuolis is a front-end developer from Oslo, Norway"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.wrapper}>
        <div>
          <p className={styles.text}>
            <strong>I’m</strong> Rokas, <strong>a front-end developer </strong>
            based in Oslo, Norway.
          </p>
          <p className={styles.text}>
            <strong>My passion is </strong>
            <span className={styles.graphic}>graphic design</span>,{' '}
            <span className={styles.code}>web development</span>,{' '}
            <span className={styles.internet}>interneting</span> and{' '}
            <span className={`${styles.technologies} ${styles.glitch}`}>
              technologies
            </span>
            .
          </p>
          <p className={styles.text}>
            Besides that, <strong>I enjoy</strong> reading books, hiking,
            travelling, movies, cooking, photography.{' '}
          </p>
          <p className={styles.text}>
            <strong>I have knowledge of</strong> HTML, CSS, JavaScript, JS
            libraries such as React, React frameworks like Next.js.{' '}
          </p>
          <p className={styles.text}>
            <strong>I also know how to</strong> beautify websites using
            TailwindCSS, styled-components, SASS, Chakra UI and make the most
            delicious sandwiches.
          </p>
        </div>
        <Button text="Contact me" />
      </main>
    </div>
  );
}
