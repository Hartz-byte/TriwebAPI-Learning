const express = require("express");
const calculatorRouter = require("./routers/calculator");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  //  console.log(req);
  res.send("I am response");
});

// app.get("/home", (req, res) => {
//   res.send("I am home");
// });

// app.get("/add", (req, res) => {
//   let n1 = 2;
//   let n2 = 1;
//   let sum = n1 + n2;

//   res.send(`Sum is ${sum}`);
// });

app.use("/calculator", calculatorRouter);

app.listen(3000);
