import { AppError, Request, catchAsync } from "../index";
import { NextFunction, Response } from "express";
// import { decodeToken } from "../helpers/jwtHelper";
// import { integrationService } from "../services/integrations.db";
// import { Request } from "./../";

export const protect = catchAsync(
  async (req: Request<unknown, unknown>, res: Response, next: NextFunction) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return next(
        new AppError("You'r not logged in, please login to continue", 401)
      );
    }

    req.jwt = token;

    next();
  }
);
