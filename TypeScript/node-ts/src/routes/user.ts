import express from "express";
// const userController = require("../controllers/user");
import { registerUser, checkTypesInteface } from "../controllers/user";

const router = express.Router();

router.post("/register", registerUser);
router.post("/update", checkTypesInteface);

export default router;
