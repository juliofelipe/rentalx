import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";

import { createConnection } from "./database/data-source";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./shared/container";

createConnection();

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.use(router);

app.listen(3333, () => console.log("Server started on port 3333"));
