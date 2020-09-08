import knex from "knex";
require("dotenv").config();

const db = knex({
  client: "pg",
  connection: process.env.DB_URL,
});

export default db;
