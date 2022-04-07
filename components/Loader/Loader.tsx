import classNames from "classnames";
import React from "react";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={classNames(styles["loader-wrapper"])}>
      <div className={classNames(styles["loader"])}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
