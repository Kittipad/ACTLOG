const mysql = require('mysql');

// --------------------------------------------

const mHost = "localhost";
const mUsername = "root";
const mPassword = "";
const mDatabase = "ACTLOG";


const conn = mysql.createConnection({
    host: mHost,
    user: mUsername,
    password: mPassword,
    database: mDatabase
});

connectDB();

function connectDB() {
    const conn = mysql.createConnection({
        host: mHost,
        user: mUsername,
        password: mPassword
    });
    conn.connect((error) => {
        conn.query("CREATE DATABASE IF NOT EXISTS " + mDatabase + " CHARACTER SET utf8 COLLATE utf8_general_ci", function (error, result) {
            console.log("Database Available");
            connectTableUsers();
        });
    });
}

function connectTableUsers() {
    var sql = "CREATE TABLE IF NOT EXISTS users ( id INT PRIMARY KEY AUTO_INCREMENT, username varchar(250) NOT NULL UNIQUE, password varchar(250) NOT NULL, userType varchar(250) NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8";
    conn.query(sql, function (error, result) {
        if (error) throw error;
        console.log("Table User Available");
    });
}


module.exports.conn = conn;