import express from "express";
import mongoose from "mongoose";

import UserRoute from "./routes/user";

const connectionString = process.env.CONNECTION_STRING || "";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome!!");
});

app.use("/user", UserRoute);

const startServer = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB!");
    app.listen(process.env.PORT, () => {
      console.log("Server connected!");
    });
  } catch (err) {
    console.error("Error connecting to MongoDB: ", err);
  }
};

startServer();
