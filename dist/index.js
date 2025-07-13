"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const api_1 = require("./api");
const mongo_connection_1 = require("./config/mongo.connection");
require("dotenv/config");
async function main() {
    try {
        await (0, mongo_connection_1.connectMongo)();
        console.log("MongoDB database running...");
        const server = new api_1.ExpressServer();
        server.registerRoutes();
        const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
        await server.start(port);
    }
    catch (error) {
        console.error("Error during application initialization:", error);
        process.exit(1);
    }
}
main();
