const express = require("express");
const userRoutes = require("./routes/user");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi from server");
});

app.use("/user", userRoutes);

app.listen(process.env.PORT);
