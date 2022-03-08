import type { NextPage } from "next";
import Head from "next/head";
import styles from "./login.module.scss";

import Appbar from "../components/Appbar/Appbar";

const Login: NextPage = () => {
  const logoStyles = {
    width: "56px",
    height: "56px",
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login to NoteShar</title>
        <meta name="description" content="Login to NoteShar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Appbar */}
      <Appbar />

      <main className="page__main">
        <h1 className="title">Login to NoteShar</h1>
        <form className="form">
          <div className="form__title-wrapper">
            <h2 className="form__title">Login</h2>
          </div>
          <div className="form__control">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input type="text" id="email" name="email" placeholder="Email" />
            <p className="form__error">Email Error</p>
          </div>
          <div className="form__control">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <p className="form__error">Password Error</p>
          </div>
          <div className="form__submit-wrapper">
            <button className="form__submit">Login</button>
          </div>
          <div className="form__msg-wrapper">
            <p className="form__msg">
              Don't have an account?
              <a className="link" href="/register">
                Register
              </a>
            </p>
          </div>
        </form>
      </main>

      <footer className="footer page__footer">
        <p className="footer__notice">Copyright Haroun Ach 2022</p>
      </footer>
    </div>
  );
};

export default Login;
