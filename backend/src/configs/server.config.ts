import { NodeEnv } from "../types/server.type";

const ServerConfig = {
  ENV: new NodeEnv(process.env.NODE_ENV ?? ""),
  ORIGIN_URL: process.env.ORIGIN_URL ?? "",

  PORT: parseInt(process.env.PORT ?? ""),

  SMTP_PORT: parseInt(process.env.SMTP_PORT ?? ""),
  SMTP_HOST: process.env.SMTP_HOST ?? "",
  SMTP_USER: process.env.SMTP_USER ?? "",
  SMTP_PSWD: process.env.SMTP_PSWD ?? "",

  EMAIL_FROM: process.env.EMAIL_FROM ?? "",
  EMAIL_TO: process.env.EMAIL_TO ?? "",

  LOG_FILE: "backend.log",
};

export default ServerConfig;
