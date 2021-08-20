import EnvConfig from "#configs/env.config";
import "#configs/winston.config";
import Logger from "#configs/winston.config";
import { ApiHandler } from "$types/api-response.type";

const init: ApiHandler = async (_, __, next) => {
  try {
    Logger.info(`${EnvConfig.ENV.capitalized} Server`);
    next();
  } catch (err) {
    next(err);
  }
};

const success: ApiHandler = async (req, _, next) => {
  try {
    return Logger.success(req);
  } catch (err) {
    next(err);
  }
};

const LoggerMiddleware = { init, success };

export default LoggerMiddleware;
