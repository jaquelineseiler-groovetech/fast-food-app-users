"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUseCase = void 0;
const errors_1 = require("../../utils/errors");
class UserUseCase {
    static async findUserByCPF(cpf, repository) {
        try {
            const user = await repository.findByCPF(cpf);
            if (!user) {
                throw new errors_1.BusinessError("Usuário não encontrado!", 404);
            }
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    static async createUser(userDTO, repository) {
        try {
            const { cpf, email, name } = userDTO;
            const exists = await repository.findByCPF(cpf);
            if (exists) {
                throw new errors_1.BusinessError("Usuário já existe!", 400);
            }
            return await repository.create({ cpf, email, name });
        }
        catch (error) {
            throw error;
        }
    }
}
exports.UserUseCase = UserUseCase;
