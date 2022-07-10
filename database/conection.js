const { Sequelize } = require("sequelize");
require("dotenv").config();
const SSL = { ssl: { require: true, rejectUnauthorized: false } };

const conection = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);
if (process.env.ENTORNO == "Production") {
  conection.options.dialectOptions = SSL;
  conection.config.dialectOptions = SSL;
  conection.connectionManager.config.dialectOptions = SSL;
}

module.exports = conection;
