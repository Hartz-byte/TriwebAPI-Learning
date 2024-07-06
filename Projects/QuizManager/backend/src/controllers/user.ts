import { Request, Response, NextFunction } from "express";

import User from "../models/user";

interface ReturnResponse {
  status: "success" | "error";
  message: String;
  data: {};
}

const getUser = async (req: Request, res: Response) => {
  let resp: ReturnResponse;

  console.log(req.userId);

  try {
    const userId = req.params.userId;
    console.log("userId: ", userId);

    if (req.userId != req.params.userId) {
      const err = new Error("You are not authorized.");
      // err.statusCode
      throw err;
    }

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
    if (req.userId != req.body._id) {
      const err = new Error("You are not authorized.");
      // err.statusCode
      throw err;
    }

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
    console.log(err);
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

export { getUser, updateUser };
