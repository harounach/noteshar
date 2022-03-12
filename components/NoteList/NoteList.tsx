import React from "react";
import classNames from "classnames";
import styles from "./NoteList.module.scss";

interface Props {
  customClasses?: string;
}

const NoteList: React.FC<Props> = ({ customClasses }) => {
  return (
    <div className={classNames(styles["note-list"], customClasses)}>
      {/* Note 1 */}
      <div className="note">
        <div className="note__row">
          <span className="note__title">Note Title by Username</span>
          <span className="note__date">06/03/2022</span>
        </div>

        <div className="note__row">
          <p className="note__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            natus quis aliquid blanditiis neque? Tenetur dolor et architecto
            odio debitis.
          </p>
        </div>
        <div className="note__row">
          <span className="note__createdby">
            Created By <span className="note__username">UserName</span>
          </span>
          <div className="note__actions">
            <button className="note__btn btn btn--icon-btn">
              <i className="btn__icon fa-solid fa-thumbs-down"></i>
            </button>
            <button className="note__btn btn btn--icon-btn">
              <i className="btn__icon fa-solid fa-thumbs-up"></i>
            </button>
            <button className="note__btn btn btn--icon-btn">
              <i className="btn__icon fa-solid fa-share-nodes"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Note 2 */}
      <div className="note">
        <div className="note__row">
          <span className="note__title">Title</span>
          <span className="note__date">06/03/2022</span>
        </div>

        <div className="note__row">
          <p className="note__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            nulla natus molestias.
          </p>
        </div>
        <div className="note__row">
          <span className="note__createdby">
            Created By <span className="note__username">UserName</span>
          </span>
          <div className="note__actions">
            <button className="note__btn btn btn--icon-btn">
              <i className="btn__icon fa-solid fa-thumbs-down"></i>
            </button>
            <button className="note__btn btn btn--icon-btn">
              <i className="btn__icon fa-solid fa-thumbs-up"></i>
            </button>
            <button className="note__btn btn btn--icon-btn">
              <i className="btn__icon fa-solid fa-share-nodes"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Note 3 */}
      <div className="note">
        <div className="note__row">
          <span className="note__title">Title</span>
          <span className="note__date">06/03/2022</span>
        </div>

        <div className="note__row">
          <p className="note__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est
            in possimus nisi non facere, ipsum aut voluptate vero officiis hic
            neque!
          </p>
        </div>
        <div className="note__row">
          <span className="note__createdby">
            Created By <span className="note__username">UserName</span>
          </span>
          <div className="note__actions">
            <button className="note__btn btn btn--icon-btn">
              <i className="btn__icon fa-solid fa-thumbs-down"></i>
            </button>
            <button className="note__btn btn btn--icon-btn">
              <i className="btn__icon fa-solid fa-thumbs-up"></i>
            </button>
            <button className="note__btn btn btn--icon-btn">
              <i className="btn__icon fa-solid fa-share-nodes"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteList;
