import mongoose, { Schema, model } from "mongoose";
import Note from "./Note";

const noteSchema = new Schema<Note>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const NoteModel = mongoose.models.Note || model<Note>("Note", noteSchema);

export default NoteModel;
