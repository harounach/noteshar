import React from "react";
import classNames from "classnames";
import styles from "./Note.module.scss";

import Button from "../Button/Button";

interface Props {
  customClasses?: string;
}

const Note: React.FC<Props> = ({ customClasses }) => {
  return (
    <div className={classNames(styles.note, customClasses)}>
      <div className={classNames(styles.note__row)}>
        <span className={classNames(styles.note__title)}>
          Note Title by Username
        </span>
        <span className={classNames(styles.note__date)}>06/03/2022</span>
      </div>

      <div className={classNames(styles.note__row)}>
        <p className={classNames(styles.note__description)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          natus quis aliquid blanditiis neque? Tenetur dolor et architecto odio
          debitis.
        </p>
      </div>
      <div className={classNames(styles.note__row)}>
        <span className={classNames(styles.note__createdby)}>
          Created By{" "}
          <span className={classNames(styles.note__username)}>UserName</span>
        </span>
        <div className={classNames(styles.note__actions)}>
          <Button
            variant="icon"
            iconType="fa-solid fa-thumbs-down"
            customClasses={classNames(styles.note__btn)}
          />

          <Button
            variant="icon"
            iconType="fa-solid fa-thumbs-up"
            customClasses={classNames(styles.note__btn)}
          />

          <Button
            variant="icon"
            iconType="fa-solid fa-share-nodes"
            customClasses={classNames(styles.note__btn)}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
