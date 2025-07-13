"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressServer = void 0;
const express_1 = __importDefault(require("express"));
const swaggerMiddleware_1 = require("./middlewares/swaggerMiddleware");
const routes_1 = require("../User/routes");
const errorHandler_1 = require("./middlewares/errorHandler");
class ExpressServer {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    registerRoutes() {
        this.app.use("/soat-api", (0, routes_1.userRoutes)()); // sem passar dbConnection
        this.app.use(swaggerMiddleware_1.swaggerRouter);
        this.app.use(errorHandler_1.errorHandler);
    }
    async start(port) {
        return new Promise((resolve, reject) => {
            this.app
                .listen(port, () => {
                console.log(`Server is running on http://localhost:${port}`);
                console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
                resolve();
            })
                .on("error", reject);
        });
    }
}
exports.ExpressServer = ExpressServer;
