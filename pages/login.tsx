import { useState, SyntheticEvent } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import classNames from "classnames";
import styles from "./login.module.scss";

import Appbar from "../components/Appbar/Appbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

import { isValidEmail, isValidPassword } from "../lib/formUtils";
import { LOGIN_USER } from "../graphql/operations/mutation";
import { GET_ALL_NOTES, GET_USER_NOTES } from "../graphql/operations/query";

import { useAppDispatch } from "../lib/store/hooks";
import { saveUser } from "../lib/store/features/user/userSlice";

import { useRedirectToHome, useIsLoggedIn } from "../lib/authHook";
import { IAuthUser } from "../interfaces/IUser";

const Login: NextPage = () => {
  // next router
  const router = useRouter();

  // Redirect user to home page if user exists
  useRedirectToHome(router);

  // user status
  const isLoggedIn = useIsLoggedIn();

  const dispatch = useAppDispatch();

  // input state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // errors state
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // notification state
  const [notification, setNotification] = useState("");

  const [login] = useMutation(LOGIN_USER, {
    variables: {
      email,
      password,
    },
    onCompleted: (data) => {
      if (data.login.success) {
        const authUser: IAuthUser = data.login.authUser;
        dispatch(saveUser(authUser));
        router.replace("/");
      }
      setNotification(data.login.message);
    },
    refetchQueries: [
      {
        query: GET_ALL_NOTES,
      },
    ],
  });

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    const isValid = checkInput();
    if (isValid) {
      // Now we can communicate with the server
      login();
    }
  };

  /**
   * CheckInput
   * @returns {boolean}
   */
  const checkInput = (): boolean => {
    let valid = true;

    setEmailError("");
    setPasswordError("");

    if (!isValidEmail(email)) {
      setEmailError("Email is invalid");
      valid = false;
    }

    if (!isValidPassword(password)) {
      setPasswordError("Password must be 4 characters long");
      valid = false;
    }

    return valid;
  };

  return (
    <div className={classNames(styles.page)}>
      <Head>
        <title>Login to NoteShar</title>
        <meta name="description" content="Login to NoteShar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Appbar */}
      <Appbar
        customClasses={classNames(styles.page__header, "container")}
        isLoggedIn={isLoggedIn}
      />

      <main className={classNames(styles.page__main, "main")}>
        <div className="container">
          <h1 className="title">Login to NoteShar</h1>
          <div className={classNames(styles.page__center)}>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__section">
                <h2 className="form__title">Login</h2>
              </div>
              <div className="form__section">
                <p className="form__notification form__notification--danger">
                  {notification}
                </p>
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
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  value={email}
                />
                {/* Render error message */}
                {emailError ? (
                  <p className="input-control__error">{emailError}</p>
                ) : null}
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
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {/* Render error message */}
                {passwordError ? (
                  <p className="input-control__error">{passwordError}</p>
                ) : null}
              </div>

              <div className="form__section">
                <Button customClasses={classNames(styles.form__submit)}>
                  Login
                </Button>
              </div>
              <div className="form__section">
                <p className="form__msg">
                  {"Don't have an account? "}
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
