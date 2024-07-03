import express from "express";
import mongoose from "mongoose";

import UserRoute from "./routes/user";

// const connectionString =
//   "mongodb+srv://Hartz-byte:Hrshg%40%40123@cluster0.hr6ptoa.mongodb.net/workshopdb?retryWrites=true&w=majority&appName=Cluster0";

const connectionString =
  "mongodb+srv://Hartz-byte:Hrshg%40%40123@cluster0.hr6ptoa.mongodb.net/workshopdb?retryWrites=true&w=majority";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome!!");
});

app.use("/user", UserRoute);

// mongoose.connect(connectionString).then(() => {
//   console.log("Connected to MongoDB!");
// });

// // mongoose.connection.on("open", () => {
// //   console.log("Connected to MongoDB!");
// // });

// app.listen(3002, () => {
//   console.log("Server connected!");
// });

const startServer = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB!");
    app.listen(3002, () => {
      console.log("Server connected!");
    });
  } catch (err) {
    console.error("Error connecting to MongoDB: ", err);
  }
};

startServer();
