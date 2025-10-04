import { promises } from "dns";
import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

export async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});

    connection.isConnected = db.connections[0].readyState;
    
    console.log("connected to MongoDB")

  } catch (error) {

    console.log("Error connectiong to MongoDB")
    process.exit(1);

  }
}

export default dbConnect;