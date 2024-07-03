import express from "express";
import { registerUser, getUser, updateUser } from "../controllers/user";

const router = express.Router();

// POST /user/
router.post("/", registerUser);

// GET /user/:userId
router.get("/:userId", getUser);

// PUT /user/
router.put("/", updateUser);

export default router;
