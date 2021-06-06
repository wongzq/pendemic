import HttpStatusCodes from "http-status-codes";
import { Exception, Codes } from "#types/error.type";
import { ErrorHandler } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

const onError: ErrorHandler<NextApiRequest, NextApiResponse> = (
  err,
  req,
  res,
  next
) => {
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

const ErrorMiddleware = { onError };

export default ErrorMiddleware;
