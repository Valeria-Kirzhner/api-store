const express = require("express");
const app = express();
const mysql = require("mysql");

const http = require("http").Server(app);
const PORT = 9000;

const db = mysql.createPool({
  connectionLimit: 100,
  host: "127.0.0.1", //This is your localhost IP
  user: "root", // "newuser" created in Step 1(e)
  password: "root", // password for the new user
  database: "api-store", // Database name
  port: "8889", // port name, "3306" by default
});

db.getConnection((err, connection) => {
  if (err) throw err;
  console.log("DB connected successful: " + connection.threadId);
});

http.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
