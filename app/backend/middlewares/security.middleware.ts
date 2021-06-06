import { ApiHandler } from "#types/api.type";

const metadata: ApiHandler = async (req, res, next) => {
  try {
    const url = req.url;
    const ip = req.headers["x-forwarded-for"] ?? req.socket.remoteAddress;
    const { origin, referer, host } = req.headers;

    global.logger.none(
      `IP: ${ip} | Referer: ${referer} | Origin: ${origin} | Host: ${host} | URL: ${url}`
    );
    next();
  } catch (err) {
    next(err);
  }
};

const SecurityMiddleware = {
  metadata: metadata,
};

export default SecurityMiddleware;
