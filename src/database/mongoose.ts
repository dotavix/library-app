import { error } from "node:console";
import mongoose, { Error } from "mongoose";

let isConnected = false;

export async function connectMongo() {
  if (isConnected) {
    return;
  }

  const uri = process.env.MONGO_URI || "";
  if (!uri) {
    throw new Error("Connection refused");
  }
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri);
  isConnected = true;
  console.log("Connection to mongo db");
  mongoose.connection.on("error", (error) => {
    console.error(err);
  });
}
