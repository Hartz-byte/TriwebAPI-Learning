import { Request, Response, NextFunction } from "express";

const registerUser = (req: Request, res: Response) => {
  console.log("data: ", req.body);

  console.log("registeration done");
  res.send("registeration done");
};

export { registerUser };