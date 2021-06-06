import { NodeEnv } from "#types/server.type";

const ServerConfig = {
  ENV: new NodeEnv(process.env.APP_ENV ?? ""),
  ORIGIN_URL: process.env.ORIGIN_URL ?? "",

  PORT: parseInt(process.env.PORT ?? ""),

  DB_PORT: parseInt(process.env.DB_PORT ?? ""),
  DB_HOST: process.env.DB_HOST ?? "",
  DB_USER: process.env.DB_USER ?? "",
  DB_PSWD: process.env.DB_PSWD ?? "",
  DB_NAME: process.env.DB_NAME ?? "",

  LOG_FILE: "pendemic-backend.log",
};

export default ServerConfig;
