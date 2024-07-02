const { createTodo } = require("../controllers/todo");
const express = require("express");

const router = express.Router();

// POST
router.post("/", (req, res) => {
  res.send("POST method called");
});

// GET
router.get("/", (req, res) => {
  res.send("GET method called");
});

// PUT
router.put("/", (req, res) => {
  res.send("UPDATE method called");
});

// DELETE
router.delete("/", (req, res) => {
  res.send("DELETE method called");
});

module.exports = router;
