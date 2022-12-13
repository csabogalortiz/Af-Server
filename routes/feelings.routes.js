const express = require('express');
const router = express.Router();
const Feeling = require('../models/Feeling.model');


router.get("/", (req, res) => {

    Feeling
        .find()
        .sort({ title: 1 })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/random", (req, res) => {


    Feeling
        .find()
        .then(allfeelings => {
            res.json(allfeelings[Math.floor(Math.random() * allfeelings.length)])
        })
        .catch(err => res.status(500).json(err))
})

router.get("/:feeling_id", (req, res, next) => {
    const { feeling_id } = req.params

    Feeling
        .findById(feeling_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post('/create', (req, res, next) => {
    const { title, content, owner } = req.body

    Feeling
        .create({ title, content })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})


router.put("/:feeling_id/edit", (req, res) => {
    const { feeling_id } = req.params
    Feeling
        .findByIdAndUpdate(feeling_id, req.body, { new: true })
        .then(resp => res.json(resp))
        .catch(err => console.log(err))
})


router.delete("/:feeling_id/delete", (req, res) => {
    const { feeling_id } = req.params
    User
        .findByIdAndDelete(feeling_id)
        .then(() => res.json(`deleted user with id ${id}`))
        .catch(err => console.log(err))
})


module.exports = router;