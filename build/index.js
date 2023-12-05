"use strict";
// export interface Location {
//   city: string;
//   state: string;
//   country: string;
//   pin: string;
// }
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// export interface Tier {
//   _id: string;
//   tierName: LoyalityTierType;
//   minSpend: number;
//   rewards: TierRewardType[];
// }
// export type TierRewardType =
//   | "Free Room Upgrade"
//   | "Late Check-Out"
//   | "Complimentary Breakfast"
//   | "Spa Credits"
//   | "Personalized Butler Service"
//   | "Exclusive Access to Club Lounge";
// export type LoyalityTierType = "Bronze" | "Silver" | "Gold";
// export { errorHandler } from "./middleware/error.handler";
// export { AppError } from "./utils/appError";
// export { catchAsync } from "./utils/catchAsync";
__exportStar(require("./middleware/error.handler"), exports);
__exportStar(require("./utils/appError"), exports);
__exportStar(require("./utils/catchAsync"), exports);
__exportStar(require("./utils/generateRandomStrings"), exports);
__exportStar(require("./helpers/bcryptHelper"), exports);
__exportStar(require("./helpers/jwtHelper"), exports);
__exportStar(require("./middleware/auth.handler"), exports);
