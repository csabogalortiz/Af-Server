const router = require("express").Router();
const User = require('../models/User.model')
const jwt = require('jsonwebtoken')
const { isAuthenticated } = require('./../midleware/jwt.middleware')


// Get All Users

router.get("/", (req, res) => {

    User
        .find()
        // .select({ title: 1, imageUrl: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => res.status(500).json(err))
})

// Get one User

router.get("/:user_id", (req, res, next) => {

    const user_id = req.params.user_id

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


// Followers 

router.post("/addfollower/:user_id", isAuthenticated, (req, res, next) => {

    const friend_id = req.params.user_id


    const currentuser_id = req.payload

    console.log({ friend_id })
    console.log({ currentuser_id })

    User
        .findByIdAndUpdate(currentuser_id, { "$push": { "followers": friend_id } })
        .then(response => res.json(response))
        .catch(err => next(err))

})

// Edit User

router.put("/:user_id/edit", (req, res) => {
    const { id } = req.params
    User
        .findByIdAndUpdate(id, req.body, { new: true })
        .then(resp => res.json(resp))
        .catch(err => console.log(err))
})


// Delete User

router.delete("/:user_id/delete", (req, res) => {
    const { id } = req.params
    User
        .findByIdAndDelete(id)
        .then(() => res.json(`deleted user with id ${id}`))
        .catch(err => console.log(err))
})


module.exports = router;




