import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import classNames from "classnames";
import styles from "./register.module.scss";

import Appbar from "../components/Appbar/Appbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

const Register: NextPage = () => {
  return (
    <div className={classNames(styles.page)}>
      <Head>
        <title>Register to NoteShar</title>
        <meta name="description" content="Register to NoteShar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Appbar */}
      <Appbar customClasses={classNames(styles.page__header, "container")} />

      <main className={classNames(styles.page__main, "main")}>
        <div className="container">
          <h1 className="title">Register to NoteShar</h1>
          <div className={classNames(styles.page__center)}>
            <form className="form">
              <div className="form__section">
                <h2 className="form__title">Register</h2>
              </div>
              <div className="form__section input-control">
                <label htmlFor="username" className="input-control__label">
                  Username
                </label>
                <input
                  className="input-control__input"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                />
                <p className="input-control__error">UserName Error</p>
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
              <div className="form__section input-control">
                <label
                  htmlFor="passwordConfirm"
                  className="input-control__label"
                >
                  Password Confirmation
                </label>
                <input
                  className="input-control__input"
                  type="password"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  placeholder="Password Confirmation"
                />
                <p className="input-control__error">
                  Password Confirmation Error
                </p>
              </div>
              <div className="form__section">
                <Button customClasses={classNames(styles.form__submit)}>
                  Register
                </Button>
              </div>
              <div className="form__section">
                <p className="form__msg">
                  Already have an account?{" "}
                  <Link href="/login">
                    <a>Login</a>
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

export default Register;
