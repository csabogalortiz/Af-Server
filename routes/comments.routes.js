const express = require('express');
const router = express.Router();
const { isAuthenticated } = require("../midleware/jwt.middleware")
const Post = require('../models/Post.model')
const Comment = require('../models/Comment.model')


router.get('/', (req, res, next) => {
  Comment
    .find()
    .populate('owner')
    .then(() => res.json(response))
    .catch(err => next(err))
});

router.post('/create/:post_id', isAuthenticated, (req, res, next) => {
  const post_id = req.params.post_id


  Comment
    .create({ ...req.body, owner: req.payload })
    .then(response => {

      Post
        .findByIdAndUpdate(post_id, { "$push": { "comments": response._id } })
        .then(() => res.json(response))
        .catch(err => next(err))
    })
    .catch(err => next(err))
})


router.delete(`/delete/:comment_id`, (req, res, next) => {
  const { id: comment_id } = req.params

  Comment
    .findByIdAndDelete(comment_id)
    .then(() => res.json(response))
    .catch(err => next(err))

})

module.exports = router;


