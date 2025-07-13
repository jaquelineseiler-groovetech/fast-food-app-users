"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessError = exports.DatabaseError = void 0;
class DatabaseError extends Error {
    constructor(message, originalError) {
        super(message);
        this.originalError = originalError;
        this.name = "DatabaseError";
    }
}
exports.DatabaseError = DatabaseError;
class BusinessError extends Error {
    constructor(message, statusCode = 400, originalError) {
        super(message);
        this.statusCode = statusCode;
        this.originalError = originalError;
        this.name = "BusinessError";
    }
}
exports.BusinessError = BusinessError;
