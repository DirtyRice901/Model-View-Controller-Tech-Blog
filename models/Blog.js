const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            defaultValue: "New Blog Post",
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            defaultValue: "Write your blog post here!",
            allowNull: false,
            validate: {    //validate the content to be at least one character long
                len: [1], 
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            references: {
                model: "user",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "blog",
    }
);

module.exports = Blog;