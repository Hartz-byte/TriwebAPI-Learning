import express from "express";
import mongoose from "mongoose";

import userRoute from "./routes/user";
import authRoute from "./routes/auth";

const connectionString = process.env.CONNECTION_STRING || "";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome!!");
});

// /user to userRoute
app.use("/user", userRoute);

// /auth to authRoute
app.use("/auth", authRoute);

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
