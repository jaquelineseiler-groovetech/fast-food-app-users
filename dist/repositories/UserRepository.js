"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
// src/repositories/UserRepository.ts
const user_schema_1 = require("../models/user.schema");
class UserRepository {
    async findAll() {
        return user_schema_1.UserModel.find();
    }
    async findById(id) {
        return user_schema_1.UserModel.findById(id);
    }
    async findByEmail(email) {
        return user_schema_1.UserModel.findOne({ email });
    }
    async findByCPF(cpf) {
        return user_schema_1.UserModel.findOne({ cpf });
    }
    async create(userData) {
        const user = new user_schema_1.UserModel(userData);
        return user.save();
    }
    async update(id, userData) {
        return user_schema_1.UserModel.findByIdAndUpdate(id, userData, { new: true });
    }
    async delete(id) {
        return user_schema_1.UserModel.findByIdAndDelete(id);
    }
}
exports.UserRepository = UserRepository;
