module.exports.add = (req, res) => {
  let n1 = req.body.num1;
  let n2 = req.body.num2;
  let sum = n1 + n2;

  res.send(`Sum is ${sum}`);
};

module.exports.subtract = (req, res) => {
  let n1 = req.body.num1;
  let n2 = req.body.num2;
  let subtract = n1 - n2;

  res.send(`Subtract is ${subtract}`);
};

module.exports.multiply = (req, res) => {
  let n1 = req.body.num1;
  let n2 = req.body.num2;
  let product = n1 * n2;

  res.send(`Product is ${product}`);
};

module.exports.divide = (req, res) => {
  let n1 = req.body.num1;
  let n2 = req.body.num2;
  let divide = n1 / n2;

  res.send(`Divide is ${divide}`);
};
