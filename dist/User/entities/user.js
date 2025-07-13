"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, cpf, email) {
        this._id = id;
        this._name = name;
        this._cpf = cpf;
        this._email = email;
    }
    static create(id, name, cpf, email) {
        if (!id || !name || !cpf || !email) {
            return null;
        }
        return new User(id, name, cpf, email);
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get cpf() {
        return this._cpf;
    }
    get email() {
        return this._email;
    }
}
exports.User = User;
