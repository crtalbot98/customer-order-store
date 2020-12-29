function connection(){
    const mysql = require('mysql2/promise');
    return mysql.createConnection({
        host: process.env.host,
        port: '3306',
        user: process.env.user,
        password: process.env.password,
        database: "Sales"
    });
}

module.exports = connection;