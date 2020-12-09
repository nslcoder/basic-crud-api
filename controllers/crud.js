const Post = require("../models/post");

// Create a new post
const createPost = async (req, res) => {
    try {
        if(!Object.keys(req.body).length) return res.send({ message: "Please provide a post." })
        const post = await Post.create(req.body);
        res.send({ message: "Post is created."});
    } catch(err) {
        res.send(err);
    };
};

// Get all the posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        if(!Object.keys(posts).length) return res.send({ message: "There are no posts." });
        res.send(posts);
    } catch(err) {
        res.send(err);
    };
};

// Get a post by its id
const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post) return res.send({ message: "Post doesn't exist." });
        res.send(post);
    } catch(err) {
        res.send(err);
    };
};

// Update a post 
const updatePost = async (req, res) => {
    try {
        if(!Object.keys(req.body).length) return res.send({ message: "Please provide new updates." });
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body);
        if(!updatedPost) return res.send({ message: "Post doesn't exist." });
        res.send({ message: "Post is updated." });
    } catch(err) {
        res.send(err);
    };
};

// Delete a post
const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if(!deletedPost) return res.send({ message: "Post doesn't exist." });
        res.send({ message: "Post is deleted." });
    } catch(err) {
        res.send(err);
    };
};

module.exports = {
    createPost: createPost,
    getPosts: getPosts,
    getPost: getPost,
    updatePost: updatePost,
    deletePost: deletePost
};