import { gql } from "@apollo/client";

/**
 * Get all notes
 */
export const GET_ALL_NOTES = gql`
  query NotesQuery {
    notes {
      id
      title
      description
      createdAt
      user {
        id
        username
      }
    }
  }
`;

/**
 * Get user's notes
 */
export const GET_USER_NOTES = gql`
  query UserNotes {
    userNotes {
      id
      title
      description
      createdAt
      user {
        id
        username
      }
    }
  }
`;

export const GET_SINGLE_NOTE = gql`
  query Note($noteId: ID!) {
    note(id: $noteId) {
      id
      title
      description
    }
  }
`;
