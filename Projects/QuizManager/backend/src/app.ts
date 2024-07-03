import express from "express";
import UserRoute from "./routes/user";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome!!");
});

app.use("/user", UserRoute);

app.listen(3002, () => {
  console.log("Server connected!");
});
