import { SyntheticEvent, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { useMutation } from "@apollo/client";
import classNames from "classnames";
import styles from "./profile.module.scss";

import Appbar from "../components/Appbar/Appbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

import { useLoggedInUser, useIsLoggedIn } from "../lib/authHook";

import { useAppSelector, useAppDispatch } from "../lib/store/hooks";
import {
  selectUsername,
  deleteUser,
} from "../lib/store/features/user/userSlice";
import { DELETE_ACCOUNT } from "../graphql/operations/mutation";

interface Props {}

const Profile: NextPage<Props> = ({}) => {
  // next router
  const router = useRouter();

  // user status
  useLoggedInUser(router);

  // user status
  const isLoggedIn = useIsLoggedIn();

  // Get username
  const username = useAppSelector(selectUsername);

  const dispatch = useAppDispatch();

  // notification state
  const [notification, setNotification] = useState(
    "This Delete All Your Notes"
  );

  // Delete account mutation
  const [deleteAccount] = useMutation(DELETE_ACCOUNT, {
    onCompleted: (data) => {
      if (data.deleteAccount.success) {
        dispatch(deleteUser());
        router.replace("/");
      }
      setNotification(data.deleteAccount.message);
    },
  });

  // handle submit
  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    deleteAccount();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>NoteShar Profile</title>
        <meta name="description" content="NoteShar Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Appbar */}
      <Appbar
        customClasses={classNames(styles.page__header, "container")}
        username={username}
        isLoggedIn={isLoggedIn}
      />

      <main className={classNames(styles.page__main, "main")}>
        <div className="container">
          <h1 className="title">{`${username} Profile`}</h1>
          <div className={classNames(styles.page__center)}>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__section">
                <h2 className="form__title">Profile</h2>
              </div>
              <div className="form__section">
                <p className="form__notification form__notification--danger">
                  {notification}
                </p>
              </div>
              <div className="form__section">
                <Button
                  variant="danger"
                  customClasses={classNames(styles.form__submit)}
                >
                  Delete Account
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer customClasses={styles.page__footer} />
    </div>
  );
};

export default Profile;
