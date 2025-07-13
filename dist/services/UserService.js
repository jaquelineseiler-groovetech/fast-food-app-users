"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
// src/services/UserService.ts
const UserRepository_1 = require("../repositories/UserRepository");
class UserService {
    constructor() {
        this.repository = new UserRepository_1.UserRepository();
    }
    async getAllUsers() {
        return this.repository.findAll();
    }
    async getUserById(id) {
        return this.repository.findById(id);
    }
    async createUser(userData) {
        return this.repository.create(userData);
    }
    async updateUser(id, userData) {
        return this.repository.update(id, userData);
    }
    async deleteUser(id) {
        return this.repository.delete(id);
    }
}
exports.UserService = UserService;
