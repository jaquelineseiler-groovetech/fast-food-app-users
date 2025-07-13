import "dotenv/config";
import { ExpressServer } from "./api";
import { connectMongo } from "./config/mongo.connection"; 


import "dotenv/config";

async function main() {
  try {
    await connectMongo();
    console.log("MongoDB database running...");

    const server = new ExpressServer();
    server.registerRoutes();

    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
    await server.start(port);
  } catch (error) {
    console.error("Error during application initialization:", error);
    process.exit(1);
  }
}

main();
