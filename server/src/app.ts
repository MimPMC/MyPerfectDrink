import cookieSession from "cookie-session";
import express, { NextFunction, Request, Response } from "express";
import { drinkRouter } from "./resources/drinks/drinkRouter";
import { userRouter } from "./resources/users/userRouter";

export const app = express();

app.use(
  cookieSession({
    name: "login",
    secure: false,
    httpOnly: true,
    secret: "as98d7asyudbahs8d97a6digas78d866u",
    maxAge: 1000 * 60000,
  })
);

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/drinks", drinkRouter);


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(500);
  console.error(err);
});