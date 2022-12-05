const express = require('express');
const router = express.Router();
const Feeling = require('../models/Feeling.model');

// Get All Feelings

router.get("/", (req, res) => {

    Feeling
        .find()
        // .select({ title: 1, imageUrl: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => res.status(500).json(err))
})


// Get One Feeling

router.get("/:feeling_id", (req, res, next) => {
    const { feeling_id } = req.params

    Feeling
        .findById(feeling_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


// Create Feeling 

router.post('/create', (req, res, next) => {
    const { title, content, owner } = req.body
    // const { _id: owner } = req.session.currentpost

    Feeling
        .create({ title, content })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

// Edit Feeling

router.put("/:feeling_id/edit", (req, res) => {
    const { id } = req.params
    Feeling
        .findByIdAndUpdate(id, req.body, { new: true })
        .then(resp => res.json(resp))
        .catch(err => console.log(err))
})

// Delete Feeling

router.delete("/:feeling_id/delete", (req, res) => {
    const { id } = req.params
    User
        .findByIdAndDelete(id)
        .then(() => res.json(`deleted user with id ${id}`))
        .catch(err => console.log(err))
})


module.exports = router;