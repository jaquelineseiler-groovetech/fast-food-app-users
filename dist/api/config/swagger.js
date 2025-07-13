"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpecs = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Grupo 25",
            version: "1.0.0",
            description: "Documentação da API do quarto desafio",
        },
        servers: [
            {
                url: "http://localhost:3002/soat-api",
            },
        ],
    },
    apis: [
        "./src/User/routes/*.ts"
    ],
};
const swaggerSpecs = (0, swagger_jsdoc_1.default)(swaggerOptions);
exports.swaggerSpecs = swaggerSpecs;
