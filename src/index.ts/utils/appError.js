export class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode && String(statusCode)[0] === "4" ? "fail" : "error"}`;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}