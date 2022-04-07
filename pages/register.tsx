import { useState, SyntheticEvent } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import classNames from "classnames";
import styles from "./register.module.scss";

import Appbar from "../components/Appbar/Appbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

import {
  isValidUsername,
  isValidEmail,
  isValidPassword,
  isPasswordsMatch,
} from "../lib/formUtils";
import { REGISTER_USER } from "../graphql/operations/mutation";
import { GET_ALL_NOTES, GET_USER_NOTES } from "../graphql/operations/query";

import { useAppDispatch } from "../lib/store/hooks";
import { saveUser } from "../lib/store/features/user/userSlice";

import { useRedirectToHome, useIsLoggedIn } from "../lib/authHook";
import { IAuthUser } from "../interfaces/IUser";

const Register: NextPage = () => {
  // next router
  const router = useRouter();

  // Redirect user to home page if user exists
  useRedirectToHome(router);

  // user status
  const isLoggedIn = useIsLoggedIn();

  const dispatch = useAppDispatch();

  // input state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // errors state
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  // notification state
  const [notification, setNotification] = useState("");

  const [register] = useMutation(REGISTER_USER, {
    variables: {
      username,
      email,
      password,
    },
    onCompleted: (data) => {
      if (data.register.success) {
        const authUser: IAuthUser = data.register.authUser;
        dispatch(saveUser(authUser));
        router.replace("/");
      }
      setNotification(data.register.message);
    },
    refetchQueries: [
      {
        query: GET_ALL_NOTES,
      },
      {
        query: GET_USER_NOTES,
      },
    ],
  });

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    const isValid = checkInput();
    if (isValid) {
      // Now we can communicate with the server
      register();
    }
  };

  /**
   * CheckInput
   * @returns {boolean}
   */
  const checkInput = (): boolean => {
    let valid = true;

    setUsernameError("");
    setEmailError("");
    setPasswordError("");
    setPasswordConfirmError("");

    if (!isValidUsername(username)) {
      setUsernameError("Username must be 4 characters long");
      valid = false;
    }

    if (!isValidEmail(email)) {
      setEmailError("Email is invalid");
      valid = false;
    }

    if (!isValidPassword(password)) {
      setPasswordError("Password must be 4 characters long");
      valid = false;
    }

    if (!isPasswordsMatch(password, passwordConfirm)) {
      setPasswordConfirmError("Passwords don't match");
      valid = false;
    }

    return valid;
  };

  return (
    <div className={classNames(styles.page)}>
      <Head>
        <title>Register to NoteShar</title>
        <meta name="description" content="Register to NoteShar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Appbar */}
      <Appbar
        customClasses={classNames(styles.page__header, "container")}
        isLoggedIn
      />

      <main className={classNames(styles.page__main, "main")}>
        <div className="container">
          <h1 className="title">Register to NoteShar</h1>
          <div className={classNames(styles.page__center)}>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__section">
                <h2 className="form__title">Register</h2>
              </div>
              <div className="form__section">
                <p className="form__notification">{notification}</p>
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {/* Render error message */}
                {usernameError ? (
                  <p className="input-control__error">{usernameError}</p>
                ) : null}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* Render error message */}
                {passwordError ? (
                  <p className="input-control__error">{passwordError}</p>
                ) : null}
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
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                {/* Render error message */}
                {passwordConfirmError ? (
                  <p className="input-control__error">{passwordConfirmError}</p>
                ) : null}
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
