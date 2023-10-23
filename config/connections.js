////////// Import the Sequelize constructor from the library ////////////////////////////////////////////////////////////////////////////////
const Sequelize = require('sequelize');

///////// Import sensitive data from .env //////////////////////////////////////////////////////////////////////////////////////////////////
require('dotenv').config();

//////// Create a sequelize instance with the database connection details //////////////////////////////////////////////////////////////////
const sequelize = process.env.JAWSDB_URL   //////////JawsDB is a MySQL/Maria DBaaS for no custom coding and easy usage /////////////////////
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
        },
    });

module.exports = sequelize;    //Export the sequelize object