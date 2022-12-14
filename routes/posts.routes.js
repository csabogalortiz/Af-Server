const express = require('express');
const router = express.Router();
const { isAuthenticated } = require("../midleware/jwt.middleware")
const Post = require('../models/Post.model')

router.get('/', (req, res, next) => {
    Post
        .find()
        .sort({ createdAt: -1 })
        .populate('owner')
        .then(response => {
            res.json(response)
        })
        .catch(err => next(err))
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
        .catch(err => { next(err) })
})


router.get('/createdPosts/:owner', isAuthenticated, (req, res, next) => {

    const { owner } = req.params

    Post
        .find({ owner })
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => { next(err) })
})


router.get('/ofFeeling/:feeling', isAuthenticated, (req, res, next) => {

    const { feeling } = req.params

    Post
        .find({ feeling })
        .populate('feeling')
        .then(response => res.json(response))
        .catch(err => { next(err) })

})


router.delete('/delete/:post_id', isAuthenticated, (req, res, next) => {

    const { post_id } = req.params

    Post
        .findByIdAndDelete(post_id)
        .then((response) => res.json(response))
        .catch(err => { next(err) })

})



module.exports = router;