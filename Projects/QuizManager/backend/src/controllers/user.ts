import { Request, Response, NextFunction } from "express";

const registerUser = (req: Request, res: Response, next: NextFunction) => {
  console.log("registeration done");
  res.send("registeration done");
};

export { registerUser };
