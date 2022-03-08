import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const logoStyles = {
    width: "56px",
    height: "56px",
  };

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
      {/* Appbar */}
      <header className="appbar page__header">
        {/* Logo */}
        <a href="/">
          <img
            style={logoStyles}
            src="/noteshar-logo.svg"
            alt="NoteShar Logo"
          />
        </a>
        <span className="appbar__app-name">NoteShar</span>
        <div>
          <a className="btn" href="login.html">
            Login
          </a>
          <div className="appbar__menu menu">
            <span className="menu__title">UserName</span>
            <div>
              <a className="menu__item" href="/profile">
                Profile
              </a>
              <a className="menu__item" href="/dashboard">
                Dashboard
              </a>
              <a className="menu__item" href="/logout">
                Logout
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main">
        <h1 className="title">Create and share notes about your life</h1>
        <div className="notes">
          {/* Note 1 */}
          <div className="note">
            <div className="note__row">
              <span className="note__title">Title</span>
              <span className="note__date">06/03/2022</span>
            </div>

            <div className="note__row">
              <p className="note__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis nulla natus molestias.
              </p>
            </div>
            <div className="note__row">
              <span className="note__createdby">
                Created By <span className="note__username">UserName</span>
              </span>
              <div className="note__actions">
                <span className="note__btn">Dislike</span>
                <span className="note__btn">Like</span>
                <span className="note__btn">Share</span>
              </div>
            </div>
          </div>

          {/* Note 2 */}
          <div className="note">
            <div className="note__row">
              <span className="note__title">Title</span>
              <span className="note__date">06/03/2022</span>
            </div>

            <div className="note__row">
              <p className="note__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis nulla natus molestias.
              </p>
            </div>
            <div className="note__row">
              <span className="note__createdby">
                Created By <span className="note__username">UserName</span>
              </span>
              <div className="note__actions">
                <span className="note__btn">Dislike</span>
                <span className="note__btn">Like</span>
                <span className="note__btn">Share</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer page__footer">
        <p className="footer__notice">Copyright Haroun Ach 2022</p>
      </footer>
    </div>
  );
};

export default Home;
