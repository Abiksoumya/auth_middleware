import jwt from "jsonwebtoken";
import { Types } from "mongoose";
export type Payload = {
    id?: Types.ObjectId;
    email?: string;
    role?: "USER" | "ADMIN" | "MANAGER";
};
declare const assignToken: (payload: Payload, secret: string, expiresIn: string) => string;
declare const decodeToken: (token: string, secret: string) => Promise<string | jwt.JwtPayload | any>;
export { assignToken, decodeToken };
