const mongoose = require('mongoose')
const Schema = mongoose.Schema
const feelingSchema = new Schema({


    title: {
        type: String,
        required: [true, 'Title required'],
        minlengh: [1, 'Title must be at least 1 character long'],
        unique: true
    },

    content: {
        type: String,
    },

    post: [{
        type: Schema.Types.ObjectId,
        ref: 'Post',
    }],

    language: {
        type: String,
        required: [true, 'Language required'],

    },

    img: {
        type: String,
    },


},
    {
        timestamps: true
    }
);

const Feeling = mongoose.model('Feeling', feelingSchema)

module.exports = Feeling;
