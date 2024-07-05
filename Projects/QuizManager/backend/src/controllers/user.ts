import { Request, Response, NextFunction } from "express";

import User from "../models/user";

interface ReturnResponse {
  status: "success" | "error";
  message: String;
  data: {};
}

const getUser = async (req: Request, res: Response) => {
  let resp: ReturnResponse;

  try {
    const userId = req.params.userId;
    const user = await User.findById(userId, { name: 1, email: 1 });

    if (!user) {
      resp = { status: "error", message: "No user found", data: {} };

      res.send(resp);
    } else {
      resp = {
        status: "success",
        message: "User found",
        data: user,
      };

      res.send(resp);
    }
  } catch (err) {
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

const updateUser = async (req: Request, res: Response) => {
  let resp: ReturnResponse;

  try {
    const userId = req.body._id;

    const user = await User.findById(userId);

    if (!user) {
      resp = { status: "error", message: "No user found", data: {} };
      res.send(resp);
      return;
    }

    user.name = req.body.name;
    await user.save();

    resp = {
      status: "success",
      message: "User updated",
      data: {},
    };

    res.send(resp);
  } catch (err) {
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

export { getUser, updateUser };
