import mongoose, { Schema, model, ObjectId } from "mongoose";
import { IUser } from "../../interfaces/IUser";

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: "noteshar_users",
  }
);

// delete middleware

userSchema.pre("deleteOne", async function () {
  try {
    const userId = this.getFilter()["_id"];
    const notes = await mongoose.models.Note.deleteMany({ userId });
  } catch (err) {
    console.error(err);
  }
  console.log(this.getFilter()["_id"]);
});

const UserModel = mongoose.models.User || model<IUser>("User", userSchema);

export default UserModel;
