import express from "express";
import { getUser, updateUser } from "../controllers/user";

const router = express.Router();

// user should be authorized
// user should be authenticated
// GET /user/:userId
router.get("/:userId", getUser);

// user should be authorized
// user should be authenticated
// PUT /user/
router.put("/", updateUser);

export default router;
