import dotenv from 'dotenv';
dotenv.config();

console.log("MONGO_URI = ", process.env.MONGO_URI);


import app from "./app";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;

console.log(MONGO_URI); // Debugging: check if it is undefined

if (!MONGO_URI) {
    console.error("MongoDB URI not defined in .env");
    process.exit(1);
}

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log("Mongo DB Connection Error:" + err);
    });
