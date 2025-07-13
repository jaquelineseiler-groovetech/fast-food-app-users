"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserValidator = void 0;
const zod_1 = require("zod");
exports.CreateUserValidator = {
    validate(input) {
        const schema = zod_1.z.object({
            name: zod_1.z.string({
                required_error: "Nome é obrigatório",
                invalid_type_error: "Nome deve ser uma string",
            }),
            cpf: zod_1.z
                .string({
                required_error: "CPF é obrigatório",
                invalid_type_error: "CPF deve ser uma string",
            })
                .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
                message: "CPF deve estar no formato 999.999.999-99",
            }),
            email: zod_1.z
                .string({
                required_error: "Email é obrigatório",
                invalid_type_error: "Email deve ser uma string",
            })
                .email({
                message: "Email inválido",
            }),
        });
        return schema.parse(input);
    },
};
