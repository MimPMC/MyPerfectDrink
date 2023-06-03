import mongoose from "mongoose";
import { app } from "./app";
import dotenv from 'dotenv'

dotenv.config()

async function main() {
  try {
    if(!process.env.MONGO_URI) {
      throw new Error('missing mongoose link')
    }
    await mongoose.connect(
      process.env.MONGO_URI
    );
    console.log("Connected to Database");

    app.listen(3000, () => {
      console.log("Server is running: http://localhost:3000");
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

main().catch(console.error);