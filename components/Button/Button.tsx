import React from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface Props {
  variant?: "icon" | "danger" | "cancel";
  iconType?: string;
  url?: string;
  customClasses?: string;
}

const Button: React.FC<Props> = ({
  variant,
  iconType,
  url,
  customClasses,
  children,
}) => {
  const classes = classNames(styles.btn, customClasses, {
    [styles["btn--icon-btn"]]: variant === "icon",
    [styles["btn--danger"]]: variant === "danger",
    [styles["btn--cancel"]]: variant === "cancel",
  });

  const iconClasses = classNames(styles.btn__icon, iconType);

  const iconContent = <i className={iconClasses}></i>;

  const buttonContent = iconType ? iconContent : children;

  let buttonView = null;
  if (url) {
    buttonView = (
      <Link href={url}>
        <a className={classes}> {buttonContent} </a>
      </Link>
    );
  } else {
    buttonView = <button className={classes}> {buttonContent} </button>;
  }

  // render button
  return buttonView;
};

export default Button;
