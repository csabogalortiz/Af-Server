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

router.post('/create', isAuthenticated, (req, res, next) => {

  Comment
    .create({ ...req.body, owner: req.payload })
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


