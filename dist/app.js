"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// src/app.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//import helmet from 'helmet';
//import routes from './routes'; // ou ajuste conforme sua estrutura
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
//app.use(helmet());
exports.app.use(express_1.default.json());
//app.use(routes); // sua definição de rotas
