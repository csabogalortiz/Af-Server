const express = require('express');
const router = express.Router();
const Feeling = require('../models/Feeling.model');
const { getRandomFeeling } = require('../utils/getRandomFeeling');




router.get("/", (req, res, next) => {

    Feeling
        .find()
        .sort({ title: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get("/random", (req, res, next) => {

    Feeling
        .find()
        .then(allfeelings => {
            const randomFeeling = getRandomFeeling(allfeelings)
            res.json(randomFeeling)
        })
        .catch(err => next(err))
})

router.get("/:feeling_id", (req, res, next) => {

    const { feeling_id } = req.params

    Feeling
        .findById(feeling_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post('/create', (req, res, next) => {

    const { title, content, language, img } = req.body
    console.log(req.body)
    Feeling
        .create({ title, content, language, img })
        .then(response =>

            res.json(response))
        .catch(err => next(err))

})


router.put("/edit/:feeling_id", (req, res, next) => {

    const { title, content, language, img } = req.body

    const { feeling_id } = req.params

    Feeling
        .findByIdAndUpdate(feeling_id, { title, content, language, img }, { new: true })
        .then(resp => res.json(resp))
        .catch(err => next(err))
})


router.delete("/:feeling_id/delete", (req, res, next) => {

    const { feeling_id } = req.params

    User
        .findByIdAndDelete(feeling_id)
        .then(() => res.json(`deleted user with id ${id}`))
        .catch(err => next(err))
})


module.exports = router;