import mongoose, { ConnectionStates } from "mongoose";

const MONGODB_URI = process.env.MONGO_URI as string;

interface Connection {
  isConnected?: ConnectionStates;
}

const connection: Connection = {};

export const connectDB = async () => {
  try {
    if (connection.isConnected === ConnectionStates.connected) {
      return;
    }
    const db = await mongoose.connect(MONGODB_URI);
    connection.isConnected = ConnectionStates.connected;
    console.log("MongoDB connected successfully");
  } catch (err) {
    connection.isConnected = ConnectionStates.disconnected;
    console.log("MongoDB connection failed");
  }
};
