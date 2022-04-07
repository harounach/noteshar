import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    notes: [Note]!
    note(id: ID!): Note!
    userNotes: [Note]!
  }

  type Mutation {
    "Create note"
    createNote(title: String!, description: String!): NoteResponse
    "Delete note"
    deleteNote(id: ID!): NoteResponse
    "Update note"
    updateNote(id: ID!, title: String!, description: String!): NoteResponse
    "User login"
    login(email: String!, password: String!): UserResponse
    "User register"
    register(username: String!, email: String!, password: String!): UserResponse
    "Delete user account"
    deleteAccount: DeleteAccountResponse
  }

  type NoteResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly created, deleted, or updated note after a successful mutation"
    note: Note
  }

  type UserResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "User auth token"
    authUser: AuthUser
  }

  type DeleteAccountResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
  }

  type Note {
    id: ID!
    "Note's title"
    title: String!
    "Note's description"
    description: String!
    "Note's create time"
    createdAt: String
    "Note's update time"
    updatedAt: String
    "Note's user"
    user: User!
  }

  type User {
    id: ID!
    "User's username"
    username: String!
    "User's email"
    email: String!
    "User's password hash"
    password: String!
  }

  type AuthUser {
    id: ID!
    "User's username"
    username: String!
    "User's email"
    email: String!
    "User's access token"
    token: String
  }
`;
