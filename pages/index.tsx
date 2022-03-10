import type { NextPage } from "next";
import Head from "next/head";
import classNames from "classnames";
import styles from "./Home.module.scss";

import Appbar from "../components/Appbar/Appbar";

const Home: NextPage = () => {
  return (
    <div className={classNames(styles.page)}>
      <Head>
        <title>NoteShar</title>
        <meta
          name="description"
          content="Create and share notes about your life"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Appbar */}
      <Appbar customClasses={classNames(styles.page__header, "container")} />
      <main className={classNames("main", styles.page__main)}>
        <div className="container">
          <h1 className="title">Create and share notes about your life</h1>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  est in possimus nisi non facere, ipsum aut voluptate vero
                  officiis hic neque!
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

export default Home;
