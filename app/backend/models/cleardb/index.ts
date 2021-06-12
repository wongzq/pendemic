import ServerConfig from "#configs/server.config";
import { initModels } from "#models/cleardb/init-models";
import { Sequelize } from "sequelize";

const Models = initModels(
  new Sequelize({
    host: ServerConfig.DB_HOST,
    username: ServerConfig.DB_USER,
    password: ServerConfig.DB_PSWD,
    database: ServerConfig.DB_NAME,
    dialect: "mysql",
    dialectModule: require("mysql2"),
  })
);

export default Models;
