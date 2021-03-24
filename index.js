const mysql = require("mysql");
const inquirer = require("inquirer");
const consoletable = require("console.table");
require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    port: 3001,
    user: process.env.USER,

    password: process.env.PASSWORD,
    database: workforce_db,
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    connection.end();
  });