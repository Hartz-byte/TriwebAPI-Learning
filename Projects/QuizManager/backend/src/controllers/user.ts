import { Request, Response, NextFunction } from "express";

import User from "../models/user";

interface ReturnResponse {
  status: "success" | "error";
  message: String;
  data: {};
}

const registerUser = async (req: Request, res: Response) => {
  let resp: ReturnResponse;

  try {
    const user = new User(req.body);
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

export { registerUser };
