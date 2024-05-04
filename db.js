const { Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// const client = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "DataEntry",
//   password: "kanekiken",
//   port: 6969,
// });

client
  .connect()
  .then((res) => {
    console.log("Connected to PostgreSQL database");
  })
  .catch((err) => {
    console.log("Could not connect to PostgreSQL database", err);
  });

module.exports = client;
