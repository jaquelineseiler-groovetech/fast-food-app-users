"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGateway = void 0;
const user_1 = require("../entities/user");
class UserGateway {
    constructor(repository) {
        this.repository = repository;
    }
    async findByCPF(cpf) {
        try {
            const userData = await this.repository.findByCPF(cpf);
            if (!userData)
                return null;
            return user_1.User.create(userData.id.toString(), userData.name, userData.cpf, userData.email);
        }
        catch (error) {
            throw error;
        }
    }
    async create(userData) {
        try {
            const newUser = await this.repository.create(userData);
            return user_1.User.create(newUser.id.toString(), newUser.name, newUser.cpf, newUser.email);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.UserGateway = UserGateway;
