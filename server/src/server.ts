import dotenv from 'dotenv';
import mongoose from "mongoose";
import { app } from "./app";




async function main() {
  try {
    const MONGODB_URI = "mongodb+srv://mimsi1:hejhejhej@mimmiscluster1.kxfjo5d.mongodb.net/MyComicBook";
    
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to Database");

    app.listen(4000, () => {
      console.log("Server is running: http://localhost:4000");
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

main().catch(console.error);
