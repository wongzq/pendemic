import ServerConfig from "#configs/server.config";
import "#configs/winston.config";
import { ApiHandler } from "#types/api.type";

const init: ApiHandler = async (req, res, next) => {
  try {
    global.logger.info(`${ServerConfig.ENV.capitalized} Server`);
    next();
  } catch (err) {
    next(err);
  }
};

const success: ApiHandler = async (req, res, next) => {
  try {
    return global.logger.success(req);
  } catch (err) {
    next(err);
  }
};

const LoggerMiddleware = { init, success };

export default LoggerMiddleware;
