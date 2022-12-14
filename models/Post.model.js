const mongoose = require('mongoose')
const Schema = mongoose.Schema
const postSchema = new Schema({

    title: {
        type: String,
    },
    content: {
        type: String,
    },

    owner:
    {
        type: Schema.Types.ObjectId,
        ref: 'User',

    },

    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],


    feeling: {
        type: Schema.Types.ObjectId,
        ref: 'Feeling'
    },


    favorite_count: {
        type: Number,
    },

    retweet_count: {
        type: Number,
    },

    postImg: {
        type: String,
    },

    canvas: {
        type: String,
    },

    text: {
        type: String,
    },

    videoId: {
        type: String,
    },

    mediaType: {
        type: String,
        enum: ['IMG', "CANVAS", "SONG", "TEXT"],
        required: [true, 'No media type selected'],
    }

},

    {
        timestamps: true
    }
);

const Post = mongoose.model('Post', postSchema)

module.exports = Post;

