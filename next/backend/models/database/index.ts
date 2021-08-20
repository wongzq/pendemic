import EnvConfig from "#configs/env.config";
import { initModels } from "#models/database/init-models";
import { Sequelize } from "sequelize";

const Models = initModels(
  new Sequelize({
    host: EnvConfig.DB_HOST,
    port: EnvConfig.DB_PORT,
    username: EnvConfig.DB_USER,
    password: EnvConfig.DB_PSWD,
    database: EnvConfig.DB_NAME,
    dialect: "mysql",
    dialectModule: require("mysql2"),
  })
);

export default Models;
