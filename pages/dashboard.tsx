import type { NextPage } from "next";
import Head from "next/head";
import styles from "./dashboard.module.css";

const Dashboard: NextPage = () => {
  const logoStyles = {
    width: "56px",
    height: "56px",
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>NoteShar Dashboard</title>
        <meta name="description" content="NoteShar Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Appbar */}
      <header className="appbar">
        {/* Logo */}
        <a href="index.html">
          <img
            style={logoStyles}
            src="./images/noteshar-logo.svg"
            alt="NoteShar Logo"
          />
        </a>
        <span className="appbar__app-name">NoteShar</span>
        <div>
          <a href="login.html">Login</a>
          <div>
            <span>UserName</span>
            <div>
              <a href="profile.html">Profile</a>
              <a href="dashboard.html">Dashboard</a>
              <a href="login.html">Logout</a>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <h1 className="title">Username Dashboard</h1>
        <p>Create and share notes about your life</p>
        <div className="note-dialog">
          <form className="note-form">
            <div className="note-form__title-wrapper">
              <h2 className="note-form__title">Create Note</h2>
            </div>
            <div className="note-form__control">
              <label htmlFor="note-title" className="note-form__label">
                Title
              </label>
              <input
                className="note-form__input"
                type="text"
                id="note-title"
                name="note_title"
                placeholder="Title"
              />
              <p className="note-form__error">Note Title Error</p>
            </div>
            <div className="note-form__control">
              <label htmlFor="note-description" className="note-form__label">
                Note Description
              </label>
              <textarea
                className="note-form__area"
                name="note_description"
                id="note-description"
                placeholder="Description"
                cols={30}
                rows={10}
              ></textarea>
              <p className="note-form__error">Note Description Error</p>
            </div>
            <div className="note-form__submit-wrapper">
              <button className="note-form__submit">Save</button>
            </div>
            <div className="note-form__submit-wrapper">
              <button className="note-form__submit">Cancel</button>
            </div>
          </form>
        </div>
        <div className="notes">
          {/* Note 1 */}
          <div className="note">
            <div className="note__row">
              <span className="note__title">Title</span>
              <span className="note__date">06/03/2022</span>
            </div>

            <div className="note__row">
              <p className="note__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis nulla natus molestias.
              </p>
            </div>
            <div className="note__row">
              <span className="note__createdby">
                Created By <span className="note__username">UserName</span>
              </span>
              <div className="note__actions">
                <i className="note__btn fa-solid fa-thumbs-down"></i>
                <i className="note__btn fa-solid fa-thumbs-up"></i>
                <i className="note__btn fa-solid fa-share-nodes"></i>
                <i className="note__btn fa-solid fa-trash"></i>
                <i className="note__btn fa-solid fa-pen"></i>
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis nulla natus molestias.
              </p>
            </div>
            <div className="note__row">
              <span className="note__createdby">
                Created By <span className="note__username">UserName</span>
              </span>
              <div className="note__actions">
                <i className="note__btn fa-solid fa-thumbs-down"></i>
                <i className="note__btn fa-solid fa-thumbs-up"></i>
                <i className="note__btn fa-solid fa-share-nodes"></i>
                <i className="note__btn fa-solid fa-trash"></i>
                <i className="note__btn fa-solid fa-pen"></i>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
