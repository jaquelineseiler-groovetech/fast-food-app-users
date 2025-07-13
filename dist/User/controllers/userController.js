"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userUseCase_1 = require("../useCases/userUseCase");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const SECRET = process.env.JWT_SECRET ?? "";
class UserController {
    static async findUserByCPF(cpf, repository, presenter) {
        const user = await userUseCase_1.UserUseCase.findUserByCPF(cpf, repository);
        const jwtUser = jsonwebtoken_1.default.sign({ ...user }, SECRET, { expiresIn: "120m" });
        return presenter.toResponse(jwtUser, "Usuário encontrado com sucesso");
    }
    static async createUser(userDTO, repository, presenter) {
        const user = await userUseCase_1.UserUseCase.createUser(userDTO, repository);
        return presenter.toResponse(user, "Usuário criado com sucesso", true);
    }
}
exports.UserController = UserController;
