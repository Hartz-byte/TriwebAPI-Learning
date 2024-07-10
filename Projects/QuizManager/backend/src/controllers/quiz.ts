import { Request, Response } from "express";

import Quiz from "../models/quiz";

const createQuiz = async (req: Request, res: Response) => {
  const created_by = req.userId;
  const name = req.body.name;
  const questions_list = req.body.question_list;
  const answers = req.body.answers;

  const quiz = new Quiz({ name, questions_list, answers, created_by });
  await quiz.save();
  res.send(req.body);
};

const getQuiz = (req: Request, res: Response) => {
  res.send(req.params.quizId);
};

const updateQuiz = (req: Request, res: Response) => {
  res.send(req.body);
};

const deleteQuiz = (req: Request, res: Response) => {
  res.send(req.params.quizId);
};

const publishQuiz = (req: Request, res: Response) => {
  res.send(req.body);
};

export { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz };
