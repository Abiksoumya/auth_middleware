import crypto from "crypto";

export function generateRandomString(length: number) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const randomBytes = crypto.randomBytes(length);

  for (let i = 0; i < length; i++) {
    const index = randomBytes[i] % chars.length;
    result += chars.charAt(index);
  }

  return result;
}
