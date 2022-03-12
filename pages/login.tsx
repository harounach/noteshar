import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import classNames from "classnames";
import styles from "./login.module.scss";

import Appbar from "../components/Appbar/Appbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

const Login: NextPage = () => {
  return (
    <div className={classNames(styles.page)}>
      <Head>
        <title>Login to NoteShar</title>
        <meta name="description" content="Login to NoteShar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Appbar */}
      <Appbar customClasses={classNames(styles.page__header, "container")} />

      <main className={classNames(styles.page__main, "main")}>
        <div className="container">
          <h1 className="title">Login to NoteShar</h1>
          <div className={classNames(styles.page__center)}>
            <form className="form">
              <div className="form__section">
                <h2 className="form__title">Login</h2>
              </div>
              <div className="form__section input-control">
                <label htmlFor="email" className="input-control__label">
                  Email
                </label>
                <input
                  className="input-control__input"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <p className="input-control__error">Email Error</p>
              </div>
              <div className="form__section input-control">
                <label htmlFor="password" className="input-control__label">
                  Password
                </label>
                <input
                  className="input-control__input"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <p className="input-control__error">Password Error</p>
              </div>
              <div className="form__section">
                <Button customClasses={classNames(styles.form__submit)}>
                  Login
                </Button>
              </div>
              <div className="form__section">
                <p className="form__msg">
                  Don't have an account?{" "}
                  <Link href="/register">
                    <a>Register</a>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer customClasses={styles.page__footer} />
    </div>
  );
};

export default Login;
