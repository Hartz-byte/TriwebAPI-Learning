import express from "express";
import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";

import userRoute from "./routes/user";
import authRoute from "./routes/auth";
import quizRoute from "./routes/quiz";
import examRoute from "./routes/exam";
import reportRoute from "./routes/report";
import ProjectError from "./helper/error";

interface ReturnResponse {
  status: "success" | "error";
  message: String;
  data: {} | [];
}

const connectionString = process.env.CONNECTION_STRING || "";

const app = express();

app.use(express.json());

declare global {
  namespace Express {
    interface Request {
      userId: String | undefined;
    }
  }
}

app.get("/", (req, res) => {
  res.send("Welcome!!");
});

// /user to userRoute
app.use("/user", userRoute);

// /auth to authRoute
app.use("/auth", authRoute);

// /auth to quizRoute
app.use("/quiz", quizRoute);

// /exam to examRoute
app.use("/exam", examRoute);

// /report to reportRoute
app.use("/report", reportRoute);

app.use(
  (err: ProjectError, req: Request, res: Response, next: NextFunction) => {
    let message: String;
    let statusCode: number;

    if (!!err.statusCode && err.statusCode < 500) {
      message = err.message;
      statusCode = err.statusCode;
    } else {
      message = "Something went wrong, please try again later.";
      statusCode = 500;
    }

    let resp: ReturnResponse = { status: "error", message, data: {} };
    if (!!err.data) {
      resp.data = err.data;
    }

    console.log(err.statusCode, err.message);
    res
      .status(statusCode)
      .send("Something went wrong, please try again later.");
  }
);

const startServer = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB!");
    app.listen(process.env.PORT, () => {
      console.log("Server connected!");
    });
  } catch (err) {
    console.error("Error connecting to MongoDB: ", err);
  }
};

startServer();
