export const successResponse = (data, message = "Success") => ({
    success: true,
    message,
    data,
});

export const errorResponse = (message, errors = []) => ({
    success: false,
    message,
    errors,
});

// Custom Error Class
export class HttpError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}