import express from "express";
import { getUser, updateUser } from "../controllers/user";
import { isAuthenticated } from "../middlewares/isAuth";

const router = express.Router();

// user should be authorized
// user should be authenticated
// GET /user/:userId
router.get("/:userId", isAuthenticated, getUser);

// user should be authorized
// user should be authenticated
// PUT /user/
router.put("/", isAuthenticated, updateUser);

export default router;
