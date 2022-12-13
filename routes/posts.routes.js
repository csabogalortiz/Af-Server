const express = require('express');
const router = express.Router();
const Post = require('../models/Post.model')
const { isAuthenticated } = require("../midleware/jwt.middleware")

router.get('/', (req, res) => {
    Post

        .find()
        .sort({ createdAt: -1 })
        .populate('owner')
        .then(response => {
            res.json(response)
        })
        .catch(err => res.status(500).json(err))
});

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

router.post('/create', isAuthenticated, (req, res, next) => {

    Post
        .create({ ...req.body, owner: req.payload })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/createdPosts/:user_id', isAuthenticated, (req, res) => {

    const user_id = req.params.user_id

    Post
        .find({ owner: user_id })
        .populate('owner')
        .then(response => res.json(response))
        .catch(error => { next(error) })
})

router.get('/ofFeeling/:feeling_id', isAuthenticated, (req, res, next) => {

    const feeling_id = req.params.feeling_id

    Post
        .find({ feeling: feeling_id })
        .populate('feeling')
        .then(response => res.json(response))
        .catch(error => { next(error) })

})


router.delete('/delete/:post_id', isAuthenticated, (req, res) => {

    const { post_id } = req.params

    Post
        .findByIdAndDelete(post_id)
        .then((response) => res.json(response))
        .catch(error => { next(error) })

})



module.exports = router;