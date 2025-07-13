"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongo = connectMongo;
const mongoose_1 = __importDefault(require("mongoose"));
async function connectMongo() {
    try {
        const mongoUrl = process.env.MONGO_URI || "mongodb://localhost:27017/fastfood-users";
        await mongoose_1.default.connect(mongoUrl);
        console.log("MongoDB connected successfully.");
    }
    catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}
