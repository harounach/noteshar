import type { NextPage } from "next";
import Head from "next/head";
import classNames from "classnames";
import styles from "./Home.module.scss";

import Appbar from "../components/Appbar/Appbar";
import Footer from "../components/Footer/Footer";
import NoteList from "../components/NoteList/NoteList";

const Home: NextPage = () => {
  return (
    <div className={classNames(styles.page)}>
      <Head>
        <title>NoteShar</title>
        <meta
          name="description"
          content="Create and share notes about your life"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Appbar */}
      <Appbar customClasses={classNames(styles.page__header, "container")} />
      <main className={classNames("main", styles.page__main)}>
        <div className="container">
          <h1 className="title">Create and share notes about your life</h1>
          <NoteList />
        </div>
      </main>

      <Footer customClasses={styles.page__footer} />
    </div>
  );
};

export default Home;
