import type { NextPage } from "next";
import Head from "next/head";
import styles from "./profile.module.css";

const Profile: NextPage = () => {
  const logoStyles = {
    width: "56px",
    height: "56px",
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>NoteShar Profile</title>
        <meta name="description" content="NoteShar Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Appbar */}
      <header className="page__header appbar">
        {/* Logo */}
        <a href="index.html">
          <img
            style={logoStyles}
            src="/noteshar-logo.svg"
            alt="NoteShar Logo"
          />
        </a>
        <span className="appbar__app-name">NoteShar</span>
        <div>
          <a href="login.html">Login</a>
          <div>
            <span>UserName</span>
            <div>
              <a href="profile.html">Profile</a>
              <a href="dashboard.html">Dashboard</a>
              <a href="login.html">Logout</a>
            </div>
          </div>
        </div>
      </header>

      <main className="main page__main">
        <h1 className="title">Username Profile</h1>
        <form className="form">
          <div className="form__title-wrapper">
            <h2 className="form__title">Login</h2>
          </div>
          <div className="form__control">
            <label htmlFor="username" className="form__label">
              Username
            </label>
            <input
              className="form__input"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            />
            <p className="form__error">UserName Error</p>
          </div>
          <div className="form__control">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              className="form__input"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
            />
            <p className="form__error">Email Error</p>
          </div>
          <div className="form__control">
            <label htmlFor="passwordOld" className="form__label">
              Old Password
            </label>
            <input
              type="password"
              id="passwordOld"
              name="passwordOld"
              placeholder="Old Password"
            />
            <p className="form__error">Password Error</p>
          </div>
          <div className="form__control">
            <label htmlFor="passwordNew" className="form__label">
              New Password
            </label>
            <input
              type="password"
              id="passwordNew"
              name="passwordNew"
              placeholder="New Password"
            />
            <p className="form__error">Password Confirmation Error</p>
          </div>
          <div className="form__submit-wrapper">
            <button className="form__submit">Update Account</button>
          </div>
          <div className="form__submit-wrapper">
            <button className="form__submit">Delete Account</button>
          </div>
        </form>
      </main>

      <footer className="footer page__footer">
        <p className="footer__notice">Copyright Haroun Ach 2022</p>
      </footer>
    </div>
  );
};

export default Profile;
