import { ApolloError } from "apollo-server-errors";
import { generateToken } from "../lib/authUtils";

export const resolvers = {
  Query: {
    /* @ts-ignore */
    notes: async (_, __, { dataSources }) => {
      return await dataSources.databaseAPI.getAllNotes();
    },

    /* @ts-ignore */
    userNotes: async (_, __, { dataSources, authUserId }) => {
      if (!authUserId) {
        return [];
      }
      return await dataSources.databaseAPI.getUserNotes(authUserId);
    },

    /* @ts-ignore */
    note: async (_, { id }, { dataSources }) => {
      return await dataSources.databaseAPI.getOneNote(id);
    },
  },
  Note: {
    /* @ts-ignore */
    user: async ({ userId }, _, { dataSources }) => {
      return await dataSources.databaseAPI.getUserById(userId);
    },
  },
  Mutation: {
    /* @ts-ignore */
    createNote: async (
      /* @ts-ignore */
      parent,
      /* @ts-ignore */
      { title, description },
      /* @ts-ignore */
      { dataSources, authUserId }
    ) => {
      try {
        if (!authUserId) {
          throw new Error("Note failed to create");
        }

        const note = await dataSources.databaseAPI.createNote(
          authUserId,
          title,
          description
        );

        return {
          code: 200,
          success: true,
          message: "Note created successfully",
          note,
        };
      } catch (err) {
        let statusCode = 404;
        if (err instanceof ApolloError) {
          statusCode = err.extensions.response.status;
        }

        return {
          code: statusCode,
          success: false,
          message: "Note failed to create",
          note: null,
        };
      }
    },
    /* @ts-ignore */
    deleteNote: async (_, { id }, { dataSources, authUserId }) => {
      try {
        const isOwner = await dataSources.databaseAPI.isNoteOwner(
          id,
          authUserId
        );
        if (!isOwner) {
          throw new Error("Note failed to delete");
        }

        const deletedNote = await dataSources.databaseAPI.deleteNote(id);

        return {
          code: 200,
          success: true,
          message: "Note deleted successfully",
          note: deletedNote,
        };
      } catch (err) {
        let statusCode = 404;
        if (err instanceof ApolloError) {
          statusCode = err.extensions.response.status;
        }

        return {
          code: statusCode,
          success: false,
          message: "Note failed to delete",
          note: null,
        };
      }
    },
    /* @ts-ignore */
    updateNote: async (
      /* @ts-ignore */
      parent_,
      /* @ts-ignore */
      { id, title, description },
      /* @ts-ignore */
      { dataSources, authUserId }
    ) => {
      try {
        const isOwner = await dataSources.databaseAPI.isNoteOwn(id, authUserId);
        if (!isOwner) {
          throw new Error("Note failed to delete");
        }

        const updatedNote = await dataSources.databaseAPI.updateNote(
          id,
          title,
          description
        );

        return {
          code: 200,
          success: true,
          message: "Note updated successfully",
          note: updatedNote,
        };
      } catch (err) {
        let statusCode = 404;
        if (err instanceof ApolloError) {
          statusCode = err.extensions.response.status;
        }

        return {
          code: statusCode,
          success: false,
          message: "Note failed to update",
          note: null,
        };
      }
    },
    /* @ts-ignore */
    login: async (_, { email, password }, { dataSources }) => {
      try {
        const user = await dataSources.databaseAPI.login(email, password);
        const token = generateToken(user.id, user.username, user.email);

        const authUser = {
          id: user.id,
          username: user.username,
          email: user.email,
          token,
        };

        return {
          code: 200,
          success: true,
          message: "User login successfully",
          authUser,
        };
      } catch (err) {
        console.error(err);
        let statusCode = 404;
        if (err instanceof ApolloError) {
          statusCode = err.extensions.response.status;
        }

        return {
          code: statusCode,
          success: false,
          message: "User failed to login",
          authUser: null,
        };
      }
    },
    /* @ts-ignore */
    register: async (_, { username, email, password }, { dataSources }) => {
      try {
        const newUser = await dataSources.databaseAPI.register(
          username,
          email,
          password
        );

        const token = generateToken(
          newUser.id,
          newUser.username,
          newUser.email
        );

        const authUser = {
          id: newUser.id,
          username: newUser.username,
          email: newUser.email,
          token,
        };

        return {
          code: 200,
          success: true,
          message: "User created successfully",
          authUser,
        };
      } catch (err) {
        console.error(err);
        let statusCode = 404;
        if (err instanceof ApolloError) {
          statusCode = err.extensions.response.status;
        }

        return {
          code: statusCode,
          success: false,
          message: "User failed to create",
          authUser: null,
        };
      }
    },
    /* @ts-ignore */
    deleteAccount: async (_, __, { dataSources, authUserId }) => {
      try {
        const deletedUser = await dataSources.databaseAPI.deleteAccount(
          authUserId
        );

        return {
          code: 200,
          success: true,
          message: "User deleted successfully",
        };
      } catch (err) {
        console.error(err);
        let statusCode = 404;
        if (err instanceof ApolloError) {
          statusCode = err.extensions.response.status;
        }

        return {
          code: statusCode,
          success: false,
          message: "User failed to delete",
        };
      }
    },
  },
};
