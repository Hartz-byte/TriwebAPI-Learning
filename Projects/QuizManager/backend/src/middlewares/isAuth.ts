import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    res.status(401).send("Not authenticated");
  }

  const token = authHeader?.split(" ")[1];
  // console.log(token);

  let decodedToken: { userId: String; iat: Number; exp: Number } | undefined;

  try {
    decodedToken = <any>jwt.verify(token as string, "secretkey");
    // console.log("decodedToken: ", decodedToken);
  } catch (err) {
    console.log(err);
    res.send("Decoded failed");
  }

  if (!decodedToken) {
    res.send("Invalid token");
  }

  req.userId = decodedToken?.userId;

  next();
};

export { isAuthenticated };
