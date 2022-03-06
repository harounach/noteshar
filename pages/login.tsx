import type { NextPage } from "next";
import Head from "next/head";
import styles from "./login.module.css";

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login to NoteShar</title>
        <meta name="description" content="Login to NoteShar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Login Page</h1>

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

export default Login;
