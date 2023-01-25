const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//MYSQL
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "password",
  database: "nodejs_beers",
});
//get all beers
app.get("", (res, req) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
  });
});

app.listen(2000, () => {
  console.log(`Listen on post 2000`);
});
