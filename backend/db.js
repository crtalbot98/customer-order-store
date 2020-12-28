const mysql = require('mysql');

const con = mysql.createConnection({
    host: process.env.host,
    port: '3306',
    user: process.env.user,
    password: process.env.password,
    database: "Sales"
});

module.exports = con;