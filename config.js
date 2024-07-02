const { createConnection } = require('mysql');
const mysql = require('mysql');

require('dotenv').config();

const PORT = process.env.PORT;
const pool = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
});

module.exports = {
    PORT,
    pool
}