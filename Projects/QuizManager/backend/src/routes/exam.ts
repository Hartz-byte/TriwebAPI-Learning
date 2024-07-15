import express from "express";
const router = express.Router();

import { isAuthenticated } from "../middlewares/isAuth";
import { startExam, submitExam } from "../controllers/exam";

// GET /exam/quizid
router.get("/:quizid", isAuthenticated, startExam);

// POST /exam/quizid
router.post("/", isAuthenticated, startExam);

export default router;
