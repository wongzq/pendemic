import ServerConfig from "#configs/server.config";
import { initModels } from "#models/cleardb/init-models";
import { Sequelize } from "sequelize";

const Models = initModels(new Sequelize(ServerConfig.DB_URI));

export default Models;
