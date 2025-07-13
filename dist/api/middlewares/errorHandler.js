"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errors_1 = require("../../utils/errors");
const zod_1 = require("zod");
const errorHandler = (err, req, res, next) => {
    if (err instanceof errors_1.BusinessError) {
        res.status(err.statusCode).json({
            error: {
                message: err.message,
            },
        });
    }
    else if (err instanceof errors_1.DatabaseError) {
        res.status(500).json({
            error: {
                message: "Erro no banco de dados",
                details: process.env.NODE_ENV === "development" ? err.message : undefined,
            },
        });
    }
    else if (err instanceof zod_1.z.ZodError) {
        res.status(400).json({
            error: {
                message: "Erro de validação",
                details: err.errors,
            },
        });
    }
    else {
        res.status(500).json({
            error: {
                message: "Erro interno do servidor",
                details: process.env.NODE_ENV === "development" ? err.message : undefined,
            },
        });
    }
    next();
};
exports.errorHandler = errorHandler;
