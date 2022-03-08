import React from "react";
import classNames from "classnames";
import styles from "./Appbar.module.scss";

interface Props {
  isLoggedIn?: boolean;
  customClasses?: string;
}

const logoStyles = {
  width: "56px",
  height: "56px",
};

const Appbar: React.FC<Props> = ({ isLoggedIn, customClasses }) => {
  return (
    <header className={classNames(styles.appbar, customClasses)}>
      {/* Logo */}
      <a href="/" className="appbar__logo">
        <img style={logoStyles} src="/noteshar-logo.svg" alt="NoteShar Logo" />
      </a>
      <span className="appbar__app-name">NoteShar</span>
      <div>
        <a className="btn" href="/login">
          Login
        </a>
        <div className="appbar__menu">
          <span className="appbar__menu-title">UserName</span>
          <div>
            <a className="appbar__menu-item" href="/profile">
              Profile
            </a>
            <a className="appbar__menu-item" href="/dashboard">
              Dashboard
            </a>
            <a className="appbar__menu-item" href="/logout">
              Logout
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Appbar;
