import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";

import { loadAuthUser } from "../authUtils";

const persistedUser = loadAuthUser();

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: {
    user: persistedUser,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
