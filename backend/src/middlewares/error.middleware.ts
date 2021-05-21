import { ErrorRequestHandler } from "express";
import { Exception, Codes } from "../types/error.type";
import HttpStatusCodes from "http-status-codes";

const ErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof Exception) {
    global.logger.failure.warn(
      req,
      `${err.code} ${err.message}`,
      `\n- INTERNAL: ${err.internal}`,
      `\n- DETAILS : ${err.details}`
    );
    global.logger.failure.warn(req, err.stack, "\n");
    return res.status(err.code).json({
      message: err.message || "",
      details: err.details || err.message || "",
    });
  } else if (err instanceof Error) {
    global.logger.failure.error(req, err.message);
    global.logger.failure.error(req, err.stack, "\n");
    return res.status(Codes.INTERNAL_SERVER_ERROR).json({
      message: HttpStatusCodes.getStatusText(Codes.INTERNAL_SERVER_ERROR) || "",
      details: HttpStatusCodes.getStatusText(Codes.INTERNAL_SERVER_ERROR) || "",
    });
  }

  global.logger.failure.error(req, err);
  return res.status(Codes.INTERNAL_SERVER_ERROR).json({
    message: HttpStatusCodes.getStatusText(Codes.INTERNAL_SERVER_ERROR) || "",
    details: HttpStatusCodes.getStatusText(Codes.INTERNAL_SERVER_ERROR) || "",
  });
};

const ErrorMiddleware = { ErrorHandler };
export default ErrorMiddleware;
