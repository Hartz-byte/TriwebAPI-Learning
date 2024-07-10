import express from "express";

import {
  createQuiz,
  getQuiz,
  updateQuiz,
  deleteQuiz,
  publishQuiz,
} from "../controllers/quiz";
import { isAuthenticated } from "../middlewares/isAuth";

const router = express.Router();

// created PUT
router.post("/", isAuthenticated, createQuiz);

// GET
router.get("/:quizId", isAuthenticated, getQuiz);

// updated PUT
router.put("/", isAuthenticated, updateQuiz);

// deleted DELETE
router.delete("/:quizId", isAuthenticated, deleteQuiz);

// publish PATCH
router.patch("/publish", isAuthenticated, publishQuiz);

export default router;
