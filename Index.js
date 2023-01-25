const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//MYSQL
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "BUNNYbhai22@",
  database: "employee",
});

//get all beers
app.get("/rows", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query("SELECT * FROM employee", (err, rows) => {
    });
  });
});

app.listen(2000, () => {
  console.log(`Listen on post 2000`);
});
