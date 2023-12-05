declare const createHash: (password: string) => Promise<string>;
declare const compareHash: (password: string, user_password: string) => Promise<Boolean>;
export { createHash, compareHash };
