import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { saveAuthUser, clearAuthUser } from "../../../authUtils";
import { IAuthUser } from "../../../../interfaces/IUser";

// Define the initial state using that type
const initialState: IAuthUser = {
  id: "",
  username: "",
  email: "",
  token: "",
};

// Define user thunk function
export const saveUser = createAsyncThunk(
  "user/saveUser",
  async (user: IAuthUser) => {
    saveAuthUser(user);
    return user;
  }
);

export const deleteUser = createAsyncThunk("user/deleteUser", async () => {
  clearAuthUser();
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        saveUser.fulfilled,
        (state, action: PayloadAction<IAuthUser>) => {
          state.id = action.payload.id;
          state.username = action.payload.username;
          state.email = action.payload.email;
          state.token = action.payload.token;
        }
      )
      .addCase(saveUser.rejected, (state, action) => {
        state.id = "";
        state.username = "";
        state.email = "";
        state.token = "";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.id = "";
        state.username = "";
        state.email = "";
        state.token = "";
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.id = "";
        state.username = "";
        state.email = "";
        state.token = "";
      });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.token;

export const selectUsername = (state: RootState) => state.user.username;
export const selectUserId = (state: RootState) => state.user.id;
export const selectToken = (state: RootState) => state.user.token;

export default userSlice.reducer;
