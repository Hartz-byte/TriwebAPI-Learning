import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user";

interface ReturnResponse {
  status: "success" | "error";
  message: String;
  data: {};
}

const registerUser = async (req: Request, res: Response) => {
  let resp: ReturnResponse;

  try {
    const email = req.body.email;
    const name = req.body.name;
    let password = await bcrypt.hash(req.body.password, 12);

    const user = new User({ email, name, password });
    const result = await user.save();

    if (!result) {
      resp = { status: "error", message: "No result dound", data: {} };

      res.send(resp);
    } else {
      resp = {
        status: "success",
        message: "Registration done",
        data: { userId: result._id },
      };

      res.send(resp);
    }
  } catch (err) {
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

const loginUser = async (req: Request, res: Response) => {
  let resp: ReturnResponse;

  try {
    const email = req.body.email;
    const password = req.body.password;
    // console.log(email, password);

    const user = await User.findOne({ email });

    if (user) {
      const status = await bcrypt.compare(password, user.password);

      if (status) {
        const token = jwt.sign({ userId: user._id }, "secretkey", {
          expiresIn: "1h",
        });

        resp = { status: "success", message: "Logged in.", data: { token } };
      } else {
        resp = { status: "error", message: "Credentials mismatch", data: {} };
      }
      res.send(resp);
    } else {
      res.status(401).send("User not found");
    }
  } catch (err) {
    console.log(err);
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

export { registerUser, loginUser };
