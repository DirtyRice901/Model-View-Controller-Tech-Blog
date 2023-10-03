///////// Import the necessary models //////////////////////////////////////////////////////////////////////////////////////////////////////
const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

///////// Define relationships between models by setting up foreign key relationship ///////////////////////////////////////////////////////
User.hasMany(Blog, {
    foreignKey: "user_id",
});

///////// Define relationships between models by setting up foreign key relationship ///////////////////////////////////////////////////////
Blog.belongsTo(User, {
    foreignKey: "user_id",
});

///////// Define relationships between models by setting up foreign key relationship ///////////////////////////////////////////////////////
Comment.belongsTo(User, {
    foreignKey: "user_id"
});

///////// Define relationships between models by setting up foreign key relationship ///////////////////////////////////////////////////////
Comment.belongsTo(Blog, {
    foreignKey: "blog_id"
});

///////// Define relationships between models by setting up foreign key relationship ///////////////////////////////////////////////////////
Blog.hasMany(Comment, {
    foreignKey: "blog_id"
});

///////// Define relationships between models by setting up foreign key relationship ///////////////////////////////////////////////////////
User.hasMany(Comment, {
    foreignKey: "user_id"
});

module.exports = { User, Blog, Comment};