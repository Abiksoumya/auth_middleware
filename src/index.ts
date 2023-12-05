// export interface Location {
//   city: string;
//   state: string;
//   country: string;
//   pin: string;
// }

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

export * from "./middleware/error.handler";
export * from "./utils/appError";
export * from "./utils/catchAsync";
export * from "./utils/generateRandomStrings";
export * from "./helpers/bcryptHelper";
export * from "./helpers/jwtHelper";
export * from "./middleware/auth.handler";
