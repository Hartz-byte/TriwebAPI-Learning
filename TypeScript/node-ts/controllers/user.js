const { addUserToDB } = require("../models/user");

const registerUser = (req, res) => {
  const userName = "Harsh";
  const password = "Password";

  const result = addUserToDB(userName, password);

  res.send(result);
};

module.exports = { registerUser };
