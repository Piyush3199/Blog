const Post = require('../models/Post');

// Get all posts
exports.getPosts = async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

// Create a new post

exports.createPost = async (req,res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    });

    try{
        const newPost = await post.save();
        res.status(201).joson(newPost);
    }catch(err){
        res.status(400).json({message: err.message});
    }
};

// TODO: Other controllers for upating, deleting, getting single post