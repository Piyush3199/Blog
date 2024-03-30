const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Getting all posts

router.get('/', async(req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.status(500).json({message: error.message});
    }
});

// Create a new post
router.post ('/', async (req,res)=>{
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    });

    try{
        const newPost = await post.save();
        res.status(201).json(newPost);
    }catch(err){
        res.status(400).json({message: err.message});
    }
});

// TODO: Other routes for updating, deleting and getting a single post

module.exports = router;
