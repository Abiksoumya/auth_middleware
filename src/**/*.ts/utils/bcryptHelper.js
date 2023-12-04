import bcrypt from "bcryptjs";
const createHash = async (password) => {
    const salt = await bcrypt.genSalt(12);
    return await bcrypt.hash(password, salt);
};
const compareHash = async (password, user_password) => {
    return await bcrypt.compare(password, user_password);
};
export { createHash, compareHash };
