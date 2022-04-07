import { DataSource } from "apollo-datasource";
import NoteModel from "../../database/models/noteModel";
import UserModel from "../../database/models/userModel";
import { generateHashedPassword, comparePassword } from "../../lib/authUtils";

class DatabaseAPI extends DataSource {
  constructor() {
    super();
  }

  /* Get all notes from database */
  async getAllNotes() {
    return await NoteModel.find();
  }

  /* Get user's notes from database */
  async getUserNotes(userId: string) {
    return await NoteModel.find({ userId });
  }

  /* Get one note from database */
  async getOneNote(id: string) {
    return await NoteModel.findById(id);
  }

  /* Create note in database */
  async createNote(userId: string, title: string, description: string) {
    const newNote = new NoteModel({ title, description, userId });
    return await newNote.save();
  }

  /* Delete note from database */
  async deleteNote(id: string) {
    return await NoteModel.findByIdAndRemove(id);
  }

  /* Update note in database */
  async updateNote(id: string, newTitle: string, newDescription: string) {
    return await NoteModel.findByIdAndUpdate(
      id,
      {
        title: newTitle,
        description: newDescription,
      },
      { new: true }
    );
  }

  /* Check note owner */
  async isNoteOwner(id: string, authUserId: string) {
    try {
      const note = await this.getOneNote(id);

      if (!note) {
        return false;
      }

      return note.userId.toString() === authUserId;
    } catch (err) {
      return false;
    }
  }

  /* Login the user */
  async login(email: string, password: string) {
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }

      if (!(await comparePassword(password, user.password))) {
        throw new Error("Password not match");
      }

      return user;
    } catch (err) {
      console.error(err);
      throw new Error("Can't login user");
    }
  }

  /* Register the user */
  async register(username: string, email: string, password: string) {
    try {
      // Generate password hash
      const hashedPassword = await generateHashedPassword(password);
      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
      });
      return await newUser.save();
    } catch (err) {
      console.error(err);
      throw Error("Can't create user");
    }
  }

  /* Delete user's account */
  async deleteAccount(userId: string) {
    // TODO: Delete All user data
    try {
      return await UserModel.deleteOne({ _id: userId });
    } catch (err) {
      console.error(err);
      throw Error("Can't delete user");
    }
  }

  /* Get user by id */
  async getUserById(userId: string) {
    try {
      return await UserModel.findById(userId);
    } catch (err) {
      console.error(err);
      throw Error("Can't find user");
    }
  }
}

export default DatabaseAPI;
