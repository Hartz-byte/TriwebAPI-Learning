import express from "express";
import { body } from "express-validator";

import { registerUser, loginUser, isUserExist } from "../controllers/auth";

const router = express.Router();

// POST /auth/
router.post(
  "/",
  [
    body("name")
      .trim()
      .not()
      .isEmpty()
      .isLength({ min: 4 })
      .withMessage(
        "Please enter your valid name, minimum 4 characters required."
      ),
    body("email")
      .trim()
      .isEmail()
      .custom((emailId: String) => {
        return isUserExist(emailId)
          .then((status: Boolean) => {
            if (status) {
              return Promise.reject("User already exist.");
            }
          })
          .catch((error) => {
            return Promise.reject(error);
          });
      })
      .normalizeEmail(),
    body("password")
      .trim()
      .isLength({ min: 8 })
      .withMessage("Please enter at least 8 characters of password."),
    body("confirm_password")
      .trim()
      .custom((value: String, { req }) => {
        if (value != req.body.password) {
          return Promise.reject("Password mismatch.");
        }
        return true;
      }),
  ],
  registerUser
);

// POST /auth/login
router.post("/login", loginUser);

export default router;
