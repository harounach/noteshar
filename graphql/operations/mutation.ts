import { gql } from "@apollo/client";

/* ************************ Note *********************** */

/* Create note */
export const CREATE_NOTE = gql`
  mutation CreateNote($title: String!, $description: String!) {
    createNote(title: $title, description: $description) {
      code
      success
      message
      note {
        id
        title
        description
      }
    }
  }
`;

/* Delete note */
export const DELETE_NOTE = gql`
  mutation DeleteNote($deleteNoteId: ID!) {
    deleteNote(id: $deleteNoteId) {
      code
      success
      message
      note {
        id
        title
        description
      }
    }
  }
`;

/* Update note */
export const UPDATE_NOTE = gql`
  mutation UpdateNote(
    $updateNoteId: ID!
    $title: String!
    $description: String!
  ) {
    updateNote(id: $updateNoteId, title: $title, description: $description) {
      code
      success
      message
      note {
        id
        title
        description
      }
    }
  }
`;

/* ************************* User ********************** */

/* Register user */
export const REGISTER_USER = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      code
      success
      message
      authUser {
        id
        username
        email
        token
      }
    }
  }
`;

/* Login user */
export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      code
      success
      message
      authUser {
        id
        username
        email
        token
      }
    }
  }
`;

/* Delete account */
export const DELETE_ACCOUNT = gql`
  mutation DeleteAccount {
    deleteAccount {
      code
      success
      message
    }
  }
`;
