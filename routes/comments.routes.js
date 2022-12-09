const express = require('express');
const router = express.Router();
const Post = require('../models/Post.model')
const Comment = require('../models/Comment.model')
const { isAuthenticated } = require("../midleware/jwt.middleware")



// Get Comments

router.get('/', (req, res) => {
  Comment
    .find()
    .populate('owner')
    .then(response => setTimeout(() => res.json(response), 1000))
    .catch(err => res.status(500).json(err))
});


// Create Comment

router.post('/create/:post_id', isAuthenticated, (req, res, next) => {
  console.log('sacando el Id', req.params.post_id)
  const post_id = req.params.post_id
  Comment
    .create({ ...req.body, owner: req.payload })
    .then(response => {

      console.log('esto es response', response)
      console.log({ post_id })
      Post
        .findByIdAndUpdate(post_id, { "$push": { "comments": response._id } })
        .then(() => res.json(response))
        .catch(err => console.log(err))


    })
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


