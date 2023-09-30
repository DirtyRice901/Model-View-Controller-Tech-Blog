const Sequelize = require('sequelize');
///////// Import sensitive data from .env //////////////////////////////////////////////////////////////////////////////////////////////////
require('dotenv').config();

//Create a sequelize instance with the database connection details
let sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
    host: 'localhost',    //host name
    dialect: 'mysql',    //'mysql' ,'mariadb', 'postgres','mssql'
    port: 3306.          //port number
    });
    module.exports = sequelize;    //Export the sequelize object