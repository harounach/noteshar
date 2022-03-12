import classNames from "classnames";
import React from "react";
import styles from "./Footer.module.scss";

interface Props {
  customClasses?: string;
}

const Footer: React.FC<Props> = ({ customClasses }) => {
  return (
    <footer className={classNames(styles.footer, customClasses)}>
      <p className={classNames(styles.footer__notice)}>
        Copyright Haroun Ach 2022
      </p>
    </footer>
  );
};

export default Footer;
