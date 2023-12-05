import {
  Request as BaseRequest,
  NextFunction,
  Response,
} from "express-serve-static-core";

export interface Request<Manager = unknown, Role = unknown, User = unknown>
  extends BaseRequest {
  jwt: string;
  manager: Manager;
  user: User;
  role: Role;
}

type CatchAsyncFN<Manager, Role, User> = (
  req: Request<Manager, Role, User>,
  res: Response,
  next: NextFunction
) => Promise<unknown>;

export const catchAsync = <Manager, Role, User>(
  fn: CatchAsyncFN<Manager, Role, User>
) => {
  return (
    req: Request<Manager, Role, User>,
    res: Response,
    next: NextFunction
  ) => {
    fn(req, res, next).catch(next);
  };
};
