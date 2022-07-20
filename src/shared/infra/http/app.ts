import "reflect-metadata";

import "../../container";

import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "../../../swagger.json";
import { AppError } from "../../errors/AppError";
import { createConnection } from "../typeorm/data-source";
import { router } from "./routes";

createConnection();
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal Server Error - ${err.message}`,
    });
  }
);

export { app };
