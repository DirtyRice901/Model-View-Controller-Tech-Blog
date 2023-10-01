///////// Import necessary packages and models /////////////////////////////////////////////////////////////////////////////////////////////
const router = require('express').Router();
const { Blog, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

///////// Router to render the homepage ////////////////////////////////////////////////////////////////////////////////////////////////////
router.get("/", async (req, res) => {
    try {
        /// Find all [.findAll] blogs and JOIN with user data ///
        const blogData = await Blog.findAll({
            include: [{ model: User, attributes: ["username"] }],
        });

        /// Convert blog data [blogData] to plain Javascript object so the template can read it ///
        const blogs = blogData.map((blog) => blog.get({ plain: true}));

        /// Pass serialized data to render homepage template with blogs and login status ///
        res.render("homepage", {
            blogs,
            logged_in: req.session.logged_in
        });
    }   catch (err) {
        res.status(500).json(err);
    }
});

///////// Router to render individual post page ////////////////////////////////////////////////////////////////////////////////////////////
router.get("/blog/:id", async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ["username"] }, 
                { model: Comment, 
                include: [{ model: User, attributes: ["username"] }],
             },
            ],            
        });
    
        /// Convert blog data [blogData] to plain Javascript object so the template can read it /// 
        const blog = blogData.get({ plain: true });
        console.log(blog);
    
         /// Pass serialized data to render homepage template with blogs and login status ///
        res.render("blog", {
            ...blog,
            logged_in: req.session.logged_in
        });
    }   catch (err) {
        res.status(500).json(err);
    }     
});

///////// Router to render dashboard page with all blogs by current user ///////////////////////////////////////////////////////////////////
router.get("/dashboard", withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            where: { user_id: req.session.user_id },
            include: [{ model: User, attributes: ["username"] }],
        });
        
        const blogs = blogData.map((blog) => this.post.get({ plain: true }));

        res.render("dashboard", {
            blogs,
            logged_in: req.session.logged_in,
        });
    }   catch (err) {
        res.status(500).json(err);
    }
});

///////// Router to render login page //////////////////////////////////////////////////////////////////////////////////////////////////////
router.get("/login", (req, res) => {
    if (req.session.logged_in) {
        /// If the user is already logged in, redirect the request to another route ///
        res.redirect("/dashboard");
        return;
    }
    res.render("login");
});

///////// Router to render signup page /////////////////////////////////////////////////////////////////////////////////////////////////////
router.get("/signup", (req,res) => {
   /// If the user is already logged in, redirect the request to another route ///
   if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
   } 
   res.render("signup");
});

///////// Router to render the newBlog page ///////////////////////////////////////////////////////////////////////////////////////////////
router.get("/newBlog", (req, res) => {
    if (req.session.logged_in) {
        res.render("newblog");
        return;
    }
    res.redirect("/login");
});

///////// Router to render the edit blog page //////////////////////////////////////////////////////////////////////////////////////////////
router.get("/editblog/:id", async (req, res) => {
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

        const blog = blogData.get({ plain: true });
        res.render("editblog", {
            ...blog,
            logged_in: req.session.logged_in,
        });
    }   catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;