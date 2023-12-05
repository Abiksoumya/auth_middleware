export declare class AppError extends Error {
    status: string;
    statusCode: number;
    isOperational: boolean;
    constructor(message: string, statusCode: number);
}
