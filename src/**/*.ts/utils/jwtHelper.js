import jwt from "jsonwebtoken";
const expiresInSeconds = (days) => days * 24 * 60 * 60;
const assignToken = (payload, secret, expiresIn) => {
    return jwt.sign(payload, secret, {
        expiresIn: expiresInSeconds(parseInt(expiresIn?.split("d")[0])),
    });
};
const decodeToken = async (token, secret) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err)
                reject(err);
            resolve(decoded);
        });
    });
};
export { assignToken, decodeToken };
