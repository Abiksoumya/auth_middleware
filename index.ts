
import express, { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { AppError } from "./utils/appError";
import { errorHandler } from "./utils/errorHandler";
import { Protect } from "./middleware/auth.middleware";
config();


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));


// app.use("/api/v1/auth", authRouter);

app.all("*", (req: Request, _res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} path on the server`, 404));
});

app.use(errorHandler);

export {Protect}


