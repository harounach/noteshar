import React from "react";
import classNames from "classnames";
import styles from "./MessageBox.module.scss";

interface Props {
  customeClasses?: string;
  variant: "info" | "danger";
  message: string;
}

const MessageBox: React.FC<Props> = ({ customeClasses, variant, message }) => {
  const messageBoxClasses = classNames(
    styles["message-box"],
    styles[`message-box--${variant}`],
    customeClasses
  );

  return (
    <div className={messageBoxClasses}>
      <p className={classNames(styles["message-box__text"])}>{message}</p>
    </div>
  );
};

export default MessageBox;
