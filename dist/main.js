"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = require("./app");
const mongo_connection_1 = require("./config/mongo.connection");
const port = process.env.PORT || 3333;
(0, mongo_connection_1.connectMongo)().then(() => {
    app_1.app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});
