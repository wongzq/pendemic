import mysql from "mysql2";
import ServerConfig from "./server.config";

export const pool = mysql
  .createPool({
    connectionLimit: 5,
    host: ServerConfig.DB_HOST,
    port: ServerConfig.DB_PORT,
    user: ServerConfig.DB_USER,
    password: ServerConfig.DB_PSWD,
    database: ServerConfig.DB_NAME,
    timezone: "Z",
  })
  .promise();

const ClearDB = { pool };

export default ClearDB;
