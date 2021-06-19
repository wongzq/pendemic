import moment from "moment-timezone";
import winston from "winston";
import EnvConfig from "#configs/env.config";
import { NextApiRequest } from "next";

const level = EnvConfig.ENV.isDevelopment ? "debug" : "info";
const levels = {
  none: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
};
const colors = {
  none: "grey",
  error: "red",
  warn: "yellow",
  info: "cyan",
  debug: "green",
};

const customFormat = winston.format.printf((msg) => {
  const level = `[${msg.level.toUpperCase()}]`.padEnd(7, " ");

  // const date = moment.tz("Asia/Dubai");
  // const datestr = date.format(`YYYY-MM-DD, ddd HH:mm [GMT]${date.zoneName()}`);
  const date = moment.utc();
  const datestr = date.format(`YYYY-MM-DD, ddd HH:mm [UTC]`);

  return winston.format
    .colorize()
    .colorize(msg.level, `${level} ${datestr} | ${msg.message}`);
});

const formatMessage = (
  type: "SUCCESS" | "FAILURE",
  req: NextApiRequest,
  message?: string
) => {
  return `${req.method} ${req?.url} ${type} ${message}`;
};

winston.addColors(colors);

const Logger = winston.createLogger({
  level: level,
  levels: levels,
  format: customFormat,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: EnvConfig.LOG_FILE,
      format: customFormat,
    }),
  ],
});

const prettify = (...messages: any) => {
  const messages_pretty: string[] = [];

  for (const message of messages) {
    if (message === undefined) {
      messages_pretty.push("undefined ");
    } else if (message === null) {
      messages_pretty.push("null ");
    } else if (typeof message === "object") {
      messages_pretty.push("\n" + JSON.stringify(message, null, 4) + "\n");
    } else {
      messages_pretty.push(message.toString() + " ");
    }
  }

  return messages_pretty.combine("");
};

type LoggerType = {
  none: (...msg: any) => winston.Logger;
  error: (...msg: any) => winston.Logger;
  warn: (...msg: any) => winston.Logger;
  info: (...msg: any) => winston.Logger;
  debug: (...msg: any) => winston.Logger;
  success: (req: NextApiRequest, ...msg: any) => winston.Logger;
  failure: {
    warn: (req: NextApiRequest, ...msg: any) => winston.Logger;
    error: (req: NextApiRequest, ...msg: any) => winston.Logger;
  };
  file: string;
};
const logger: LoggerType = {
  none: (...msg: any) =>
    Logger.log({ level: "none", message: prettify(...msg) }),
  error: (...msg: any) =>
    Logger.log({ level: "error", message: prettify(...msg) }),
  warn: (...msg: any) =>
    Logger.log({ level: "warn", message: prettify(...msg) }),
  info: (...msg: any) =>
    Logger.log({ level: "info", message: prettify(...msg) }),
  debug: (...msg: any) =>
    Logger.log({ level: "debug", message: prettify(...msg) }),
  success: (req: NextApiRequest, ...msg: any) =>
    Logger.log({
      level: "info",
      message: formatMessage("SUCCESS", req, msg ? prettify(...msg) : ""),
    }),
  failure: {
    warn: (req: NextApiRequest, ...msg: any) =>
      Logger.log({
        level: "warn",
        message: formatMessage("FAILURE", req, msg ? prettify(...msg) : ""),
      }),
    error: (req: NextApiRequest, ...msg: any) =>
      Logger.log({
        level: "error",
        message: formatMessage("FAILURE", req, msg ? prettify(...msg) : ""),
      }),
  },
  file: EnvConfig.LOG_FILE,
};

declare global {
  module NodeJS {
    interface Global {
      logger: LoggerType;
    }
  }
}

global.logger = logger;
