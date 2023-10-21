/////////////////// Import User model data ////////////////////////////////////////////////////////////////////////////////////////////////
const  { User } = require('../models');

/////////////////// Sample data for blogs table ///////////////////////////////////////////////////////////////////////////////////////////
const userdata = [
    {
        username: 'testuser1',
        email: 'user1@test.com',
        password: 'password1',
    },
    {
        username: 'testuser2',
        email: 'user2@test.com',
        password: 'password2',
    },
    {
        username: 'testuser3',
        email: 'user3@test.com',
        password: 'password3',
    },
    {
        username: 'testuser4',
        email: 'user4@test.com',
        password: 'password4',
    }
];

/////////////////// Function that seeds blogs table with sample data //////////////////////////////////////////////////////////////////////
const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;