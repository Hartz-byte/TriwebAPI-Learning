"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const userController = require("../controllers/user");
const user_1 = require("../controllers/user");
const router = express_1.default.Router();
router.post("/register", user_1.registerUser);
exports.default = router;
