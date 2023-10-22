/////////////////// Importing the Blog model to use its schema ////////////////////////////////////////////////////////////////////////////
const { Blog } = require('../models');

/////////////////// Creating the sample data /////////////////////////////////////////////////////////////////////////////////////////////
const blogdata = [
    {
        name: "Blog 1",
        description: "This is the first blog",
        user_id: 1
    },
    {
        name: "Blog 2",
        description: "This is the second blog",
        user_id: 2
    },
    {
        name: "Blog 3",
        description: "This is the third blog",
        user_id: 3
    },
    {
        name: "Blog 4",
        description: "This is the fourth blog",
        user_id: 4
    },
];

/////////////////// Creating the function to seed the sample data ////////////////////////////////////////////////////////////////////////
const seedBlog = () => Blog.bulkCreate(blogdata);
/////////////////// Exporting the function to seed the sample data ////////////////////////////////////////////////////////////////////////
module.exports = seedBlog;