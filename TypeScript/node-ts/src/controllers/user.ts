import { Request, Response } from "express";
import { addUserToDB, updateUserData } from "../models/user";

const registerUser = (req: Request, res: Response) => {
  const userName = "Harsh";
  const password = "Password";
  const age = 24;

  const result = addUserToDB(userName, password, age);

  res.send(result);
};

const checkTypesInteface = (req: Request, res: Response) => {
  interface Point {
    readonly x: number;
    readonly y: number;
  }

  let x: Point = { x: 0, y: 4 };

  type lockedState = "locked" | "unlocked";
  let xState: lockedState = "locked";

  const myUser = {
    id: 1,
    uname: "Harsh",
    password: "password",
    age: 24,
    is_active: false,
    accountStatus: "locked",
  };

  const result = updateUserData(myUser);
  res.send(result);
};

export { registerUser, checkTypesInteface };
