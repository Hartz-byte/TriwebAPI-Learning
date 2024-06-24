import express, { Request, Response } from "express";
import userRoutes from "./routes/user";

const app = express();

app.use("/user", userRoutes);

app.listen(process.env.PORT);
