import EnvConfig from "#configs/env.config";
import "#configs/winston.config";
import { ApiHandler } from "$types/api-response.type";

const init: ApiHandler = async (_, __, next) => {
  try {
    global.logger.info(`${EnvConfig.ENV.capitalized} Server`);
    next();
  } catch (err) {
    next(err);
  }
};

const success: ApiHandler = async (req, _, next) => {
  try {
    return global.logger.success(req);
  } catch (err) {
    next(err);
  }
};

const LoggerMiddleware = { init, success };

export default LoggerMiddleware;
