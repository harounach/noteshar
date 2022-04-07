import type { NextPage } from "next";
import Head from "next/head";
import classNames from "classnames";
import { useQuery, useApolloClient } from "@apollo/client";
import styles from "./Home.module.scss";

import Appbar from "../components/Appbar/Appbar";
import Footer from "../components/Footer/Footer";
import NoteList from "../components/NoteList/NoteList";
import Loader from "../components/Loader/Loader";
import MessageBox from "../components/MessageBox/MessageBox";

import { GET_ALL_NOTES } from "../graphql/operations/query";

import { useAppSelector } from "../lib/store/hooks";
import {
  selectUsername,
  selectUserId,
} from "../lib/store/features/user/userSlice";

import { useIsLoggedIn } from "../lib/authHook";

interface Props {}

const Home: NextPage<Props> = () => {
  // Get username
  const username = useAppSelector(selectUsername);
  // Get user id
  const userId = useAppSelector(selectUserId);

  // user status
  const isLoggedIn = useIsLoggedIn();

  const { loading, error, data } = useQuery(GET_ALL_NOTES);
  // const apolloClient = useApolloClient();
  // console.log(apolloClient.link);

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
      <Appbar
        customClasses={classNames(styles.page__header, "container")}
        username={username}
        isLoggedIn={isLoggedIn}
      />
      <main className={classNames("main", styles.page__main)}>
        <div className="container">
          <h1 className="title">Create and share notes about your life</h1>
          {/* Dislay loading */}
          {loading && <Loader />}
          {/* Dislay error */}
          {error && <MessageBox message={error?.message} variant="danger" />}
          <NoteList notes={data?.notes} userId={userId} />
        </div>
      </main>

      <Footer customClasses={styles.page__footer} />
    </div>
  );
};

export default Home;
