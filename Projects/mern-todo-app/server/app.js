const express = require("express");
const mongoose = require("mongoose");
const todoRouter = require("./routers/todo");

const app = express();

app.use("/", todoRouter);

const uri = "mongodb://localhost:27017/";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(3000, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Server Started");
      }
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
