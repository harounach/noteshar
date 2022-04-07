import mongoose, { Schema, model } from "mongoose";
import { INote } from "../../interfaces/INote";

const noteSchema = new Schema<INote>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
    collection: "noteshar_notes",
  }
);

const NoteModel = mongoose.models.Note || model<INote>("Note", noteSchema);

export default NoteModel;
