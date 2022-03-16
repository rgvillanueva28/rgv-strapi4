const parse = require("pg-connection-string").parse;
const DATABASE_URL = parse(process.env.DATABASE_URL);
const NODE_ENV = parse(process.env.NODE_ENV);

module.exports = ({ env }) => ({
  connection: {
    client: NODE_ENV === "development" ? "sqlite" : "postgres",
    connection:
      NODE_ENV === "development"
        ? {
            filename: env("DATABASE_FILENAME", ".tmp/data.db"),
          }
        : {
            host: DATABASE_URL.host,
            port: DATABASE_URL.port,
            database: DATABASE_URL.database,
            user: DATABASE_URL.user,
            password: DATABASE_URL.password,
            ssl: {
              rejectUnauthorized: false,
            },
          },
    debug: NODE_ENV === "development" ? true : false,
  },
});
