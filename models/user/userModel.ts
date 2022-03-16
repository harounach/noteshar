import mongoose, { Schema, model } from "mongoose";
import User from "./User";

const userSchema = new Schema<User>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.models.User || model<User>("User", userSchema);

export default UserModel;
