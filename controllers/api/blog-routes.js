const router = require("express").Router();
const { Blog, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");
/// get all blogs with associated username ///
router.get("/", async (req, res) => {
    try {
        const blogData = Blog.findAll({
            include: [{ model: User, attributes: ["username"] }],
        });
        res.status(200).json(blogData);
    }   catch (err) {
        res.status(500).json(err);
    }
});

///////// Get one blog by ID with associated username and comments
router.get("/:id", async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ["username"] },
                {
                    model: Comment,
                    include: [{ model: User, attributes: ["username"] }],
                },
            ],
        });
        if(!blogData) {
            res.status(404).json({ message: "No blog found with that id..."});
            return;
        }
        res.status(200).json(blogData);
    }   catch (err) {
        res.status(500).json(err);
    }
});

///////// Create a new post with authenticated user ////////////////////////////////////////////////////////////////////////////////////////
router.post("/", withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newBlog);
    }   catch (err) {
        res.status(400).json(err);
    }
});

///  Update an existing post with authenticated user ///////////////////////////////////////////////////////////////////////////////////////
router.put("/:id", withAuth, async (req, res) => {
    try {
        const updatedBlog = await Blog.update(req.body, {
            where: { id: req.params.id },
        });
        if (!updatedBlog) {
            res.status(404).json({ message: "No blog found with that id..."});
            return;
        }
        res.status(200).json(updatedBlog);
    }   catch (err) {
        res.status(500).json(err);
    }
});

///////// Delete a blog with authenticated user ////////////////////////////////////////////////////////////////////////////////////////////
router.delete("/:id", withAuth, async (req, res) => {
    try {
        /// Delete all comments related to the blog ///
        await Comment.destroy({
            where: { blog_id: req.params.id },
        });

        if (!deleteBlog) {
            res.status(404).json({ message: "No blog found with that id..."});
            return;
        }
        res.status(200).json(deletedBlog);
    }   catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
