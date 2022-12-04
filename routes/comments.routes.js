const express = require('express');
const router = express.Router();
const Post = require('../models/Post.model')
const Comment = require('../models/Comment.model')
// const { isLoggedIn } = require('./../middleware/route-guard');
// const User = require('../models/User.model')


// Get One Comment 

router.get("/getOneComment/:comment_id", (req, res, next) => {

  const { comment_id } = req.params

  Comment
    .findById(comment_id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})


// Create Comment

router.post('/comment/create/:post_id', (req, res, next) => {
  const { owner, description } = req.body
  const { post_id } = req.params
  // const { _id: owner } = req.session.currentUser

  Comment
    .create({ owner, description })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))

  Post
    .findByIdAndUpdate(post_id, { "$push": { "comment": comment._id } })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})



// Delete Comment

router.delete(`/delete/:comment_id`, (req, res) => {
  const { id: comment_id } = req.params

  Comment
    .findByIdAndDelete(comment_id)
    .then(() => res.json(response))
    .catch(err => res.status(500).json(err))

})

module.exports = router;


