const express = require("express");
const userRouter = require("./routers/user");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("i am working");
});

app.use("/user", userRouter);

app.listen(3000);
