const express = require('express');
const router = express.Router();
const { findByIdAndUpdate, findByIdAndDelete } = require("../models/Post.model")
const Post = require('../models/Post.model')
const User = require('../models/User.model')


// Get All Posts
router.get('/', (req, res) => {
    Post
        .find()
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => res.status(500).json(err))
});


// Get One Post
router.get("/:post_id", (req, res, next) => {

    const { post_id } = req.params

    Post
        .findById(post_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

// Create Post

router.post('/create', (req, res, next) => {
    const { title, content } = req.body
    let prueba
    let user
    // const { _id: owner } = req.session.currentpost

    Post
        .create({ title, content })
        .then(response => prueba = response)


    return User
        //   let whole: {prueba, user}
        .findByIdAndUpdate(user_id, { "$push": { "comments": comment._id } })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// Created Posts list

router.get('/createdPosts', (req, res) => {

    const { _id: owner } = req.session.currentUser

    Post
        .find({ owner })
        .then(response => res.json(response))
        .catch(error => { next(error) })
})



module.exports = router;