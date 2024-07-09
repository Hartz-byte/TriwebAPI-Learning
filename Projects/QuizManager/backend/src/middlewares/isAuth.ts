import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import ProjectError from "../helper/error";

const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.get("Authorization");

    if (!authHeader) {
      const err = new ProjectError("Not authenticated");
      err.statusCode = 401;
      throw err;
    }

    const token = authHeader?.split(" ")[1];
    // console.log(token);

    let decodedToken: { userId: String; iat: Number; exp: Number } | undefined;

    try {
      decodedToken = <any>jwt.verify(token as string, "secretkey");
    } catch (error) {
      const err = new ProjectError("Not authenticated");
      err.statusCode = 401;
      throw err;
    }

    if (!decodedToken) {
      const err = new ProjectError("Not authenticated");
      err.statusCode = 401;
      throw err;
    }

    req.userId = decodedToken?.userId;

    next();
  } catch (err) {
    next(err);
  }
};

export { isAuthenticated };
