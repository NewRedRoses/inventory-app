const { Pool } = require("pg");
require("dotenv").config();

const { DB_HOST, DB_USER, DB, DB_PWD, DB_PORT } = process.env;

module.exports = new Pool({
  host: DB_HOST,
  user: DB_USER,
  database: DB,
  password: DB_PWD,
  port: DB_PORT,
});
