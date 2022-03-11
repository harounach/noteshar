import React from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./Appbar.module.scss";

import Button from "../Button/Button";

interface Props {
  isLoggedIn?: boolean;
  customClasses?: string;
}

const Appbar: React.FC<Props> = ({ isLoggedIn, customClasses }) => {
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
        <Button url="/login">Login</Button>
        <div className={classNames(styles.appbar__menu)}>
          <span className={classNames(styles["appbar__menu-title"])}>
            UserName
          </span>
          <div className={classNames(styles["appbar__menu-dropdown"])}>
            <Link href="/profile">
              <a className={classNames(styles["appbar__menu-item"])}>Profile</a>
            </Link>

            <Link href="/dashboard">
              <a className={classNames(styles["appbar__menu-item"])}>
                Dashboard
              </a>
            </Link>

            <Link href="/login">
              <a className={classNames(styles["appbar__menu-item"])}>Logout</a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Appbar;
