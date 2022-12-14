// const express = require('express');
// const router = express.Router();
// const { isAuthenticated } = require("../midleware/jwt.middleware")
// const Feeling = require('../models/Feeling.model');
// const Post = require('../models/Post.model')

// router.get('/')
// router.get("/random", (req, res) => {

//     Feeling
//         .find()
//         .then(allfeelings => {
//             const shuffled = allfeelings.sort(() => 0.5 - Math.random());
//             // // Get sub-array of first n elements after shuffled
//             let feelingChoices = shuffled.slice(0, 4);
//             // const out = allfeelings[Math.floor(Math.random() * allfeelings.length)]
//             feelingChoices = feelingChoices.map(feeling => ({ title: feeling.title, _id: feeling._id }))

//             const correctIndx = Math.floor(Math.random() * 4);

//             const correctFeeling = feelingChoices[correctIndx]

//             Post
//                 .find({ feeling: correctFeeling._id })
//                 .populate('feeling')
//                 .limit(1)
//                 .then(response => {
//                     res.json({
//                         post: response,
//                         choices: feelingChoices
//                     })
//                 })

//                 .catch(error => { next(error) })
//         })
//         .catch(err => res.status(500).json(err))
// })


// module.exports = router

