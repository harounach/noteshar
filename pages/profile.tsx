import type { NextPage } from "next";
import Head from "next/head";
import styles from "./profile.module.css";

const Profile: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NoteShar Profile</title>
        <meta name="description" content="NoteShar Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Profile Page</h1>

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

export default Profile;
