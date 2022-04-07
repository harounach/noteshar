import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import classNames from "classnames";
import { from, useApolloClient, useQuery, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import styles from "./dashboard.module.scss";

import Appbar from "../../components/Appbar/Appbar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import NoteList from "../../components/NoteList/NoteList";
import Loader from "../../components/Loader/Loader";
import MessageBox from "../../components/MessageBox/MessageBox";

import { GET_USER_NOTES } from "../../graphql/operations/query";

import { useLoggedInUser, useIsLoggedIn } from "../../lib/authHook";

import { useAppSelector } from "../../lib/store/hooks";
import {
  selectUsername,
  selectUserId,
  selectToken,
} from "../../lib/store/features/user/userSlice";
import { createAuthLink } from "../../lib/apollo";
import { useEffect } from "react";

interface Props {}

const Dashboard: NextPage<Props> = ({}) => {
  // next router
  const router = useRouter();

  // user status
  useLoggedInUser(router);

  // user status
  const isLoggedIn = useIsLoggedIn();

  // Get username
  const username = useAppSelector(selectUsername);
  // Get user id
  const userId = useAppSelector(selectUserId);

  // auth token
  const token = useAppSelector(selectToken);

  const apolloClient = useApolloClient();

  const { loading, error, data } = useQuery(GET_USER_NOTES);

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
        isLoggedIn={isLoggedIn}
      />

      <main className={classNames("main", styles.page__main)}>
        <div className="container">
          <h1 className="title">{`${username} Dashboard`}</h1>
          <div className={classNames(styles.page__hero)}>
            <p>Create and share notes about your life</p>
            <Button url="/dashboard/create">Create Note</Button>
          </div>

          {/* Dislay loading */}
          {loading && <Loader />}
          {/* Dislay error */}
          {error && <MessageBox message={error?.message} variant="danger" />}
          <NoteList notes={data?.userNotes} userId={userId} />
        </div>
      </main>
      <Footer customClasses={styles.page__footer} />
    </div>
  );
};

export default Dashboard;
