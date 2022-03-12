import type { NextPage } from "next";
import Head from "next/head";
import classNames from "classnames";
import styles from "./dashboard.module.scss";

import Appbar from "../components/Appbar/Appbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import NoteList from "../components/NoteList/NoteList";

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
          <NoteList />
        </div>
      </main>
      <Footer customClasses={styles.page__footer} />
    </div>
  );
};

export default Dashboard;
