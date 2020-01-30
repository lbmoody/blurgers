require('dotenv').config()
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: DB_HOST
    , port: DB_PORT
    , user: DB_USER
    , password: DB_PASS
    , database: DB_DATA
});

connection.connect(function (err) {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;