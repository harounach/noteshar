import type { NextPage } from "next";
import Head from "next/head";
import classNames from "classnames";
import styles from "./profile.module.scss";

import Appbar from "../components/Appbar/Appbar";
import Button from "../components/Button/Button";

const Profile: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NoteShar Profile</title>
        <meta name="description" content="NoteShar Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Appbar */}
      <Appbar customClasses={classNames(styles.page__header, "container")} />

      <main className={classNames(styles.page__main, "main")}>
        <div className="container">
          <h1 className="title">Username Profile</h1>
          <div className={classNames(styles.page__center)}>
            <form className="form">
              <div className="form__section">
                <h2 className="form__title">Login</h2>
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
                <label htmlFor="passwordOld" className="input-control__label">
                  Old Password
                </label>
                <input
                  className="input-control__input"
                  type="password"
                  id="passwordOld"
                  name="passwordOld"
                  placeholder="Old Password"
                />
                <p className="input-control__error">Password Error</p>
              </div>
              <div className="form__section input-control">
                <label htmlFor="passwordNew" className="input-control__label">
                  New Password
                </label>
                <input
                  className="input-control__input"
                  type="password"
                  id="passwordNew"
                  name="passwordNew"
                  placeholder="New Password"
                />
                <p className="input-control__error">
                  Password Confirmation Error
                </p>
              </div>
              <div className="form__section">
                <Button customClasses={classNames(styles.form__submit)}>
                  Update Account
                </Button>
              </div>
              <div className="form__section">
                <Button
                  variant="danger"
                  customClasses={classNames(styles.form__submit)}
                >
                  Delete Account
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <footer className={classNames(styles.page__footer, "footer")}>
        <p className={classNames(styles.footer__notice)}>
          Copyright Haroun Ach 2022
        </p>
      </footer>
    </div>
  );
};

export default Profile;
