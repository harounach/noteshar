import React from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./Appbar.module.scss";
import { useApolloClient } from "@apollo/client";

import Button from "../Button/Button";

import { useAppDispatch } from "../../lib/store/hooks";
import { deleteUser } from "../../lib/store/features/user/userSlice";

interface Props {
  customClasses?: string;
  username?: string;
  isLoggedIn: boolean;
}

const Appbar: React.FC<Props> = ({ customClasses, username, isLoggedIn }) => {
  // dispatch user actions
  const dispatch = useAppDispatch();

  // apollo client
  const apolloClient = useApolloClient();

  const handleLogout = () => {
    dispatch(deleteUser());
    // refresh queries here
  };

  const loggedOutControlView = <Button url="/login">Login</Button>;
  const loggedInControlView = (
    <div className={classNames(styles.appbar__menu)}>
      <span className={classNames(styles["appbar__menu-title"])}>
        {username}
      </span>
      <div className={classNames(styles["appbar__menu-dropdown"])}>
        <Link href="/profile">
          <a className={classNames(styles["appbar__menu-item"])}>Profile</a>
        </Link>

        <Link href="/dashboard">
          <a className={classNames(styles["appbar__menu-item"])}>Dashboard</a>
        </Link>

        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );

  const controlView = isLoggedIn ? loggedInControlView : loggedOutControlView;

  return (
    <header className={classNames(styles.appbar, customClasses)}>
      {/* Logo */}
      <Link href="/">
        <a className={classNames(styles.appbar__logo)}>
          <img src="/noteshar-logo.svg" alt="NoteShar Logo" />
        </a>
      </Link>

      <span className={classNames(styles["appbar__app-name"])}>NoteShar</span>
      <div className={classNames(styles.appbar__controls)}>
        {/* render control view */}
        {controlView}
      </div>
    </header>
  );
};

export default Appbar;
