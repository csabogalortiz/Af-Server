const express = require('express');
const router = express.Router();
const { findByIdAndUpdate, findByIdAndDelete } = require("../models/Post.model")
const Post = require('../models/Post.model')
const User = require('../models/User.model')
const { isAuthenticated } = require("../midleware/jwt.middleware")
const Comment = require('../models/Comment.model')


// Get All Posts
router.get('/', (req, res) => {
    Post
        .find()
        .populate('owner')
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => res.status(500).json(err))
});


// Get One Post
router.get("/details/:post_id", (req, res, next) => {

    const { post_id } = req.params

    Post
        .findById(post_id)

        .populate({
            path: 'comments',
            model: "Comment",
            populate: {
                path: 'owner',
                model: "User"
            },
        })
        .then(response => res.json(response))
        .catch(err => next(err))
})


// Create Post

router.post('/create', isAuthenticated, (req, res, next) => {


    Post
        .create({ ...req.body, owner: req.payload })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// Created Posts list

router.get('/createdPosts/:user_id', isAuthenticated, (req, res) => {

    const user_id = req.params.user_id

    Post
        .find({ owner: user_id })
        .populate('owner')
        .then(response => res.json(response))
        .catch(error => { next(error) })
})



module.exports = router;