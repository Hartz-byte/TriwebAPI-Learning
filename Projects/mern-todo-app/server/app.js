const express = require("express");

const app = express();

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Server Started");
  }
});
