const router = require("express").Router();
const User = require('../models/User.model')
const jwt = require('jsonwebtoken')
const { isAuthenticated } = require('./../midleware/jwt.middleware');
const { model } = require("mongoose");


router.get("/", (req, res) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get("/:user_id", (req, res, next) => {

    const user_id = req.params.user_id

    User
        .findById(user_id)
        .populate('followers')
        .populate({
            path: 'favPosts',
            model: 'Post',
            populate: {
                path: 'owner',
                model: 'User'
            },
        })
        .populate({
            path: 'sharedPosts',
            model: 'Post',
            populate: {
                path: 'owner',
                model: 'User'
            },
        })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post("/addfollower/:user_id", isAuthenticated, (req, res, next) => {

    const { user_id: friend_id } = req.params
    const { _id: currentuser_id } = req.payload

    const promises = [
        User.findByIdAndUpdate(currentuser_id, { "$addToSet": { "followers": friend_id } }, { new: true }),
        User.findByIdAndUpdate(friend_id, { "$addToSet": { "followers": currentuser_id } }, { new: true })
    ]

    Promise
        .all(promises)
        .then(([currentuser, friend]) => res.json([currentuser, friend]))
        .catch(err => next(err))

})

router.post("/unfollow/:user_id", isAuthenticated, (req, res, next) => {

    const { user_id: friend_id } = req.params
    const { _id: currentuser_id } = req.payload

    const promises = [
        User.findByIdAndUpdate(currentuser_id, { "$pull": { "followers": friend_id } }, { new: true }),
        User.findByIdAndUpdate(friend_id, { "$pull": { "followers": currentuser_id } }, { new: true })
    ]

    Promise
        .all(promises)
        .then(([currentuser, friend]) => res.json([currentuser, friend]))
        .catch(err => next(err))
})

router.post("/favPost/:post_id", isAuthenticated, (req, res, next) => {

    const { post_id } = req.params
    user_id = req.payload

    User
        .findByIdAndUpdate(user_id, { "$addToSet": { "favPosts": post_id } })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post("/unlikePost/:post_id", isAuthenticated, (req, res, next) => {

    const { post_id } = req.params
    user_id = req.payload


    User
        .findByIdAndUpdate(user_id, { "$pull": { "favPosts": post_id } })
        .then(response => res.json(response))
        .catch(err => next(err))
})



router.post("/sharedPosts/:post_id", isAuthenticated, (req, res, next) => {

    const { post_id } = req.params
    user_id = req.payload


    User
        .findByIdAndUpdate(user_id, { "$addToSet": { "sharedPosts": post_id } })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post("/unSharePost/:post_id", isAuthenticated, (req, res, next) => {

    const { post_id } = req.params
    user_id = req.payload

    User
        .findByIdAndUpdate(user_id, { "$pull": { "sharedPosts": post_id } })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post("/myPosts/:post_id", isAuthenticated, (req, res, next) => {

    const { post_id } = req.params
    user_id = req.payload

    User
        .findByIdAndUpdate(user_id, { "$addToSet": { "myPosts": post_id } })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.put("/edit/:user_id", (req, res) => {
    const { username, email, bio, profileImg, coverImg } = req.body
    const { user_id } = req.params

    User
        .findByIdAndUpdate(user_id, { username, email, bio, profileImg, coverImg }, { new: true })
        .then(resp => res.json(resp))
        .catch(err => next(err))
})






module.exports = router;




