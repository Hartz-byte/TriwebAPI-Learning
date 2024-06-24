const express = require("express");
const path = require("path");
const app = express();

// app.use(express.static(path.join(__dirname, "images")));

app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/", (req, res) => {
  res.send("from server");
});

app.listen(3000, () => {
  console.log("server started");
});
