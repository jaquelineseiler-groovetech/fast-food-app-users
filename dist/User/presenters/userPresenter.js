"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserJsonPresenter = void 0;
class UserJsonPresenter {
    toJSON(user) {
        return {
            id: user.id,
            name: user.name,
            cpf: user.cpf,
            email: user.email,
        };
    }
    toResponse(data, message, isCreated) {
        return {
            statusCode: isCreated ? 201 : 200,
            body: {
                message: message || "Operação realizada com sucesso",
                response: data
                    ? typeof data === "string"
                        ? data
                        : this.toJSON(data)
                    : undefined,
            },
        };
    }
}
exports.UserJsonPresenter = UserJsonPresenter;
