import { Sequelize } from "sequelize";
import "dotenv/config.js";

const SSL = { ssl: { require: true, rejectUnauthorized: false } };

const connection = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);
if (process.env.ENTORNO == "Production") {
  connection.options.dialectOptions = SSL;
  connection.config.dialectOptions = SSL;
  connection.connectionManager.config.dialectOptions = SSL;
}

export default connection;
