"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishQuiz = exports.deleteQuiz = exports.updateQuiz = exports.getQuiz = exports.createQuiz = void 0;
const express_validator_1 = require("express-validator");
const error_1 = __importDefault(require("../helper/error"));
const quiz_1 = __importDefault(require("../models/quiz"));
const createQuiz = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validationError = (0, express_validator_1.validationResult)(req);
        if (!validationError.isEmpty()) {
            const err = new error_1.default("Validation failed");
            err.statusCode = 422;
            err.data = validationError.array();
            res.send(err);
            throw err;
        }
        const created_by = req.userId;
        const name = req.body.name;
        const questions_list = req.body.questions_list;
        const answers = req.body.answers;
        const quiz = new quiz_1.default({ name, questions_list, answers, created_by });
        const result = yield quiz.save();
        const resp = {
            status: "success",
            message: "quiz created successfully",
            data: { quizId: result._id },
        };
        res.status(201).send(resp);
    }
    catch (error) {
        next(error);
    }
});
exports.createQuiz = createQuiz;
const getQuiz = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quizId = req.params.quizId;
        const quiz = yield quiz_1.default.findById(quizId, {
            name: 1,
            questions_list: 1,
            answers: 1,
            created_by: 1,
        });
        if (!quiz) {
            const err = new error_1.default("Quiz not found.");
            err.statusCode = 404;
            throw err;
        }
        if (req.userId !== quiz.created_by.toString()) {
            const err = new error_1.default("You are not authorized.");
            err.statusCode = 403;
            throw err;
        }
        const resp = {
            status: "success",
            message: "quiz created successfully",
            data: quiz,
        };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
});
exports.getQuiz = getQuiz;
const updateQuiz = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validationError = (0, express_validator_1.validationResult)(req);
        if (!validationError.isEmpty()) {
            const err = new error_1.default("Validation failed");
            err.statusCode = 422;
            err.data = validationError.array();
            res.send(err);
            throw err;
        }
        const quizId = req.body._id;
        const quiz = yield quiz_1.default.findById(quizId);
        if (!quiz) {
            const err = new error_1.default("Quiz not found.");
            err.statusCode = 404;
            throw err;
        }
        if (req.userId !== quiz.created_by.toString()) {
            const err = new error_1.default("You are not authorized.");
            err.statusCode = 403;
            throw err;
        }
        if (quiz.is_published) {
            const err = new error_1.default("You can not update, published quiz.");
            err.statusCode = 405;
            throw err;
        }
        quiz.name = req.body.name;
        quiz.questions_list = req.body.questions;
        quiz.answers = req.body.answers;
        yield quiz.save();
        const resp = {
            status: "success",
            message: "quiz updated successfully",
            data: {},
        };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
});
exports.updateQuiz = updateQuiz;
const deleteQuiz = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quizId = req.params.quizId;
        const quiz = yield quiz_1.default.findById(quizId);
        yield quiz_1.default.deleteOne({ _id: quizId });
        if (!quiz) {
            const err = new error_1.default("Quiz not found.");
            err.statusCode = 404;
            throw err;
        }
        if (req.userId !== quiz.created_by.toString()) {
            const err = new error_1.default("You are not authorized.");
            err.statusCode = 403;
            throw err;
        }
        if (quiz.is_published) {
            const err = new error_1.default("You can not delete, published quiz.");
            err.statusCode = 405;
            throw err;
        }
        const resp = {
            status: "success",
            message: "quiz deleted successfully",
            data: {},
        };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteQuiz = deleteQuiz;
const publishQuiz = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quizId = req.params.quizId;
        const quiz = yield quiz_1.default.findById(quizId);
        if (!quiz) {
            const err = new error_1.default("Quiz not found.");
            err.statusCode = 404;
            throw err;
        }
        if (req.userId !== quiz.created_by.toString()) {
            const err = new error_1.default("You are not authorized.");
            err.statusCode = 403;
            throw err;
        }
        quiz.is_published = true;
        yield quiz.save();
        const resp = {
            status: "success",
            message: "quiz published successfully",
            data: {},
        };
        res.status(200).send(resp);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.publishQuiz = publishQuiz;
