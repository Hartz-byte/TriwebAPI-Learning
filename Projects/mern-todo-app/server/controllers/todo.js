const Todo = require("../models/todo");

const createTodo = async (req, res) => {
  res.send("POST method called");
};

module.exports = { createTodo };
