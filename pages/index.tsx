import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NoteShar</title>
        <meta
          name="description"
          content="Create and share notes about your life"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>NoteShar</h1>

        <p className={styles.description}>
          Create and share notes about your life
        </p>

        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}>
        <p>Created by Haroun Ach 2022</p>
      </footer>
    </div>
  );
};

export default Home;
