import mysql from "mysql2";
import EnvConfig from "#configs/env.config";

export const pool = mysql
  .createPool({
    connectionLimit: 5,
    host: EnvConfig.DB_HOST,
    port: EnvConfig.DB_PORT,
    user: EnvConfig.DB_USER,
    password: EnvConfig.DB_PSWD,
    database: EnvConfig.DB_NAME,
    timezone: "Z",
  })
  .promise();

const MySQL = { pool };

export default MySQL;
