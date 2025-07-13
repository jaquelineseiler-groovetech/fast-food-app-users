import { HTTPServer } from "../interfaces/HTTPServer";
import express, { Express } from "express";
import { swaggerRouter } from "./middlewares/swaggerMiddleware";
import { userRoutes } from "../User/routes";
import { errorHandler } from "./middlewares/errorHandler";

export class ExpressServer implements HTTPServer {
  private app: Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  registerRoutes(): void {
    this.app.use("/soat-api", userRoutes()); // sem passar dbConnection

    this.app.use(swaggerRouter);

    this.app.use(errorHandler);
  }

  async start(port: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.app
        .listen(port, () => {
          console.log(`Server is running on http://localhost:${port}`);
          console.log(
            `Swagger docs available at http://localhost:${port}/api-docs`
          );
          resolve();
        })
        .on("error", reject);
    });
  }
}
