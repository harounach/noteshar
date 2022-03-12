import type { NextPage } from "next";
import Head from "next/head";
import classNames from "classnames";
import styles from "./dashboard.module.scss";

import Appbar from "../components/Appbar/Appbar";
import Button from "../components/Button/Button";

const Dashboard: NextPage = () => {
  const logoStyles = {
    width: "56px",
    height: "56px",
  };

  return (
    <div className={classNames(styles.page)}>
      <Head>
        <title>NoteShar Dashboard</title>
        <meta name="description" content="NoteShar Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Appbar */}
      <Appbar customClasses={classNames(styles.page__header, "container")} />

      <main className={classNames("main", styles.page__main)}>
        <div className="container">
          <h1 className="title">Username Dashboard</h1>
          <p>Create and share notes about your life</p>
          <div className={classNames(styles.page__center)}>
            <form className="form">
              <div className="form__section">
                <h2 className="form__title">Create Note</h2>
              </div>
              <div className="form__section input-control">
                <label htmlFor="note-title" className="input-control__label">
                  Title
                </label>
                <input
                  className="input-control__input"
                  type="text"
                  id="note-title"
                  name="note_title"
                  placeholder="Title"
                />
                <p className="input-control__error">Note Title Error</p>
              </div>
              <div className="form__section input-control">
                <label
                  htmlFor="note-description"
                  className="input-control__label"
                >
                  Note Description
                </label>
                <textarea
                  className="input-control__area"
                  name="note_description"
                  id="note-description"
                  placeholder="Description"
                  cols={30}
                  rows={10}
                ></textarea>
                <p className="input-control__error">Note Description Error</p>
              </div>
              <div className="form__section">
                <div className="form__btn-group">
                  <Button customClasses={classNames("note-form__submit")}>
                    Save
                  </Button>

                  <Button
                    variant="cancel"
                    customClasses={classNames("note-form__submit")}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="notes">
            {/* Note 1 */}
            <div className="note">
              <div className="note__row">
                <span className="note__title">Note Title by Username</span>
                <span className="note__date">06/03/2022</span>
              </div>

              <div className="note__row">
                <p className="note__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum natus quis aliquid blanditiis neque? Tenetur dolor
                  et architecto odio debitis.
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
                <span className="note__title">Note Title by Username</span>
                <span className="note__date">06/03/2022</span>
              </div>

              <div className="note__row">
                <p className="note__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum natus quis aliquid blanditiis neque? Tenetur dolor
                  et architecto odio debitis.
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
                <span className="note__title">Note Title by Username</span>
                <span className="note__date">06/03/2022</span>
              </div>

              <div className="note__row">
                <p className="note__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum natus quis aliquid blanditiis neque? Tenetur dolor
                  et architecto odio debitis.
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
        </div>
      </main>
      <footer className={classNames("footer", styles.page__footer)}>
        <p className="footer__notice">Copyright Haroun Ach 2022</p>
      </footer>
    </div>
  );
};

export default Dashboard;
