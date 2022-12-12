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
        .sort({ createdAt: -1 })
        .populate('owner')
        .then(response => {
            console.log('estas ordensadoo???', response)
            res.json(response)
        })
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

    console.log('hola req body', req.body)
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

// All Posts from a Feeling 

router.get('/ofFeeling/:feeling_id/', isAuthenticated, (req, res, next) => {

    const feeling_id = req.params.feeling_id
    console.log(feeling_id)

    Post
        .find({ feelings: feeling_id })
        .populate('feeling')
        .then(response => res.json(response))
        .catch(error => { next(error) })

})

// Delete Post

router.delete('/delete/:post_id', isAuthenticated, (req, res) => {

    const { post_id } = req.params
    const { user_id: user_id } = req.payload

    Post
        .findByIdAndDelete(post_id)
        .then((response) => res.json(response))
        .catch(error => { next(error) })

})



module.exports = router;