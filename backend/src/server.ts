import path from "path";
import dotenv from "dotenv";

dotenv.config({
  path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`),
});

import "./types/server.type";

import compression from "compression";
import cors from "cors";
import express from "express";
import ServerConfig from "./configs/server.config";
import "./configs/winston.config";

import TestRouter from "./routers/test.router";

import SecurityMiddleware from "./middlewares/security.middleware";
import ErrorMiddleware from "./middlewares/error.middleware";

import ServerUtil from "./server.util";

// --------------------------------------------------------------------------------
// Setup Server
// --------------------------------------------------------------------------------
const Server: express.Application = express();

Server.use(compression());
Server.use(
  cors({
    origin: ServerConfig.ORIGIN_URL,
    credentials: true,
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE", "OPTIONS"],
    exposedHeaders: "",
  })
);
Server.use(express.json({ limit: "50mb" }));

Server.disable("x-powered-by");
Server.disable("server");

// --------------------------------------------------------------------------------
// Routes
// --------------------------------------------------------------------------------
Server.use(SecurityMiddleware.metadata);

if (ServerConfig.ENV.isDevelopment) {
  Server.use("/api/test", TestRouter);
}

// --------------------------------------------------------------------------------
// Error Handler
// --------------------------------------------------------------------------------
Server.use(ErrorMiddleware.ErrorHandler);

// --------------------------------------------------------------------------------
// Listen
// --------------------------------------------------------------------------------
Server.listen(ServerConfig.PORT, () => {
  ServerUtil.logServerPeriodic("Example Server");
});

export default Server;
