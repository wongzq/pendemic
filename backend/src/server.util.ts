import fs from "fs";
import moment from "moment-timezone";
import ServerConfig from "./configs/server.config";

const ServerUtil = {
  logServer: () =>
    global.logger.none(
      `${ServerConfig.ENV.capitalized} Server running on PORT ${ServerConfig.PORT}`
    ),

  logServerPeriodic: (server_name:string) => {
    global.logger.none("-----------------------------------------------------");
    global.logger.none(`START SERVER - ${server_name}`);

    ServerUtil.logServer();

    // upload logs to S3 hourly
    setInterval(() => {
      const date = moment.utc();

      if (date.minute() === 0 && date.second() === 0) {
        ServerUtil.logServer();

        // resets logs at UTC 00:00:00
        if (date.hour() === 0 && date.minute() === 0 && date.second() === 0) {
          fs.truncateSync(global.logger.file);
        }
      }
    }, 1000);
  },
};

export default ServerUtil;
