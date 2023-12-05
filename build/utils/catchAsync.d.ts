import { Request as BaseRequest, NextFunction, Response } from "express-serve-static-core";
export interface Request<Manager = unknown, Role = unknown, User = unknown> extends BaseRequest {
    jwt: string;
    manager: Manager;
    user: User;
    role: Role;
}
type CatchAsyncFN<Manager, Role, User> = (req: Request<Manager, Role, User>, res: Response, next: NextFunction) => Promise<unknown>;
export declare const catchAsync: <Manager, Role, User>(fn: CatchAsyncFN<Manager, Role, User>) => (req: Request<Manager, Role, User>, res: Response, next: NextFunction) => void;
export {};
