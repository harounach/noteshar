import { useState, SyntheticEvent } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import classNames from "classnames";
import { useMutation } from "@apollo/client";
import styles from "./create.module.scss";

import Appbar from "../../components/Appbar/Appbar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

import { isValidNoteTitle, isValidNoteDescription } from "../../lib/formUtils";
import { CREATE_NOTE } from "../../graphql/operations/mutation";
import { GET_ALL_NOTES, GET_USER_NOTES } from "../../graphql/operations/query";

import { useLoggedInUser, useIsLoggedIn } from "../../lib/authHook";

import { useAppSelector } from "../../lib/store/hooks";
import { selectUsername } from "../../lib/store/features/user/userSlice";

interface Props {}

const CreateNote: NextPage<Props> = ({}) => {
  // next router
  const router = useRouter();

  // user status
  useLoggedInUser(router);

  // Get username
  const username = useAppSelector(selectUsername);

  // user status
  const isLoggedIn = useIsLoggedIn();

  // input state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // errors state
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  // notification state
  const [notification, setNotification] = useState("Create New Note");

  // create new note mutation
  const [createNote] = useMutation(CREATE_NOTE, {
    variables: {
      title,
      description,
    },
    onCompleted: (data) => {
      console.log(data);
      setNotification(data.createNote.message);
    },
    refetchQueries: [
      {
        query: GET_USER_NOTES,
      },
      {
        query: GET_ALL_NOTES,
      },
    ],
  });

  // handle submit
  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    const isValid = checkInput();
    if (isValid) {
      // Now we can communicate with the server
      createNote();
    }
    router.replace("/dashboard");
    // clear inputs
    setTitle("");
    setDescription("");
  };

  /**
   * CheckInput
   * @returns {boolean}
   */
  const checkInput = (): boolean => {
    let valid = true;

    setTitleError("");
    setDescription("");

    if (!isValidNoteTitle(title)) {
      setTitleError("Title must be 4 characters long");
      valid = false;
    }

    if (!isValidNoteDescription(description)) {
      setDescriptionError("Description must be 10 characters long");
      valid = false;
    }

    return valid;
  };

  return (
    <div className={classNames(styles.page)}>
      <Head>
        <title>NoteShar Dashboard</title>
        <meta name="description" content="NoteShar Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Appbar */}
      <Appbar
        customClasses={classNames(styles.page__header, "container")}
        username={username}
        isLoggedIn
      />

      <main className={classNames("main", styles.page__main)}>
        <div className="container">
          <h1 className="title">Username Dashboard</h1>
          <div className={classNames(styles.page__hero)}>
            <p>Create and share notes about your life</p>
          </div>
          <div className={classNames(styles.page__center)}>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__section">
                <h2 className="form__title">Create Note</h2>
              </div>
              <div className="form__section">
                <p className="form__notification">{notification}</p>
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {/* Render error message */}
                {titleError ? (
                  <p className="input-control__error">{titleError}</p>
                ) : null}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                {/* Render error message */}
                {descriptionError ? (
                  <p className="input-control__error">{descriptionError}</p>
                ) : null}
              </div>
              <div className="form__section">
                <div className="form__btn-group">
                  <Button customClasses={classNames("note-form__submit")}>
                    Save
                  </Button>

                  <Button
                    variant="cancel"
                    customClasses={classNames("note-form__submit")}
                    url="/dashboard"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer customClasses={styles.page__footer} />
    </div>
  );
};

export default CreateNote;
