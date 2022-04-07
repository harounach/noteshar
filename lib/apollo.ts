import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { loadAuthUser } from "./authUtils";

const GRAPHQL_API_URI = process.env.NEXT_PUBLIC_GRAPHQL_API_URI as string;

const httpLink = new HttpLink({
  uri: GRAPHQL_API_URI,
});

/**
 * Create an ApolloLink instance with token
 * @param {string} token
 */
export const createAuthLink = (token: string) => {
  return setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });
};

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists

  const user = loadAuthUser();

  const token = user.token;

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  // link: httpLink,
  // link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default apolloClient;
