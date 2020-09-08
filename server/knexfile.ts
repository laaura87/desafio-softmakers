require("dotenv").config();
import path from "path";
module.exports = {
  client: "pg",
  connection: process.env.DB_URL,
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
};
