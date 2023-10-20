const { Comment} = require('../models');
const commentdata = [
    {
        comment_text: "This is the first comment",
        user_id: 1,
        blog_id: 1
    },
    {
        comment_text: "This is the second comment",
        user_id: 2,
        blog_id: 2
    },
    {
        comment_text: "This is the third comment",
        user_id: 3,
        blog_id: 3
    },
    {
        comment_text: "This is the fourth comment",
        user_id: 4,
        blog_id: 4
    },
    
];
const seedComment = () => Comment.bulkCreate(commentdata);
module.exports = seedComment;