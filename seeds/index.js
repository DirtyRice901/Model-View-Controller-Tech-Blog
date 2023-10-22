/////////////////// Import the seed data /////////////////////////////////////////////////////////////////////////////////////////////////
const seedUsers = require("./userData");
const seedBlogs = require("./blogData");
const seedComments = require("./commentData");

/////////////////// Import sequelize connection //////////////////////////////////////////////////////////////////////////////////////////////
const sequelize = require("../config/connection");

/////////////////// Function that seeds all tables with sample data //////////////////////////////////////////////////////////////////////////
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n'); // This is just to let you know that the database synced correctly.//
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    await seedBlogs();
    console.log('\n----- BLOGS SEEDED -----\n');
    await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');
    /////////////////// Exit the process ////////////////////////////////////////////////////////////////////////////////////////////////////
    process.exit(0);
};

/////////////////// Call the function to seed all tables /////////////////////////////////////////////////////////////////////////////////////
seedAll();