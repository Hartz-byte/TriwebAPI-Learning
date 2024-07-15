import express from "express";
import { body } from "express-validator";

import { isAuthenticated } from "../middlewares/isAuth";
import {
  createQuiz,
  getQuiz,
  updateQuiz,
  deleteQuiz,
  publishQuiz,
} from "../controllers/quiz";

const router = express.Router();

// created PUT
router.post(
  "/",
  isAuthenticated,
  [
    body("name")
      .trim()
      .not()
      .isEmpty()
      .isLength({ min: 10 })
      .withMessage(
        "Please enter your valid name, minimum 10 characters required."
      ),
    body("questions_list").custom((questions_list) => {
      if (questions_list.length == 0) {
        return Promise.reject("Enter at least one question.");
      }
      return true;
    }),
    body("answers").custom((answers) => {
      if (Object.keys(answers).length == 0) {
        return Promise.reject("Answers should not be empty.");
      }
      return true;
    }),
  ],
  createQuiz
);

// GET
router.get("/:quizId", isAuthenticated, getQuiz);

// updated PUT
router.put(
  "/",
  isAuthenticated,
  [
    body("name")
      .trim()
      .not()
      .isEmpty()
      .isLength({ min: 10 })
      .withMessage(
        "Please enter your valid name, minimum 10 characters required."
      ),
    body("questions_list").custom((questions_list) => {
      if (questions_list.length == 0) {
        return Promise.reject("Enter at least one question.");
      }
      return true;
    }),
    body("answers").custom((answers) => {
      if (Object.keys(answers).length == 0) {
        return Promise.reject("Answers should not be empty.");
      }
      return true;
    }),
  ],
  updateQuiz
);

// deleted DELETE
router.delete("/:quizId", isAuthenticated, deleteQuiz);

// publish PATCH
router.patch("/publish", isAuthenticated, publishQuiz);

export default router;
