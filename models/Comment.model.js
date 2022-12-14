const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commentSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

    description: {
        type: String,
        required: [true, 'Description required'],
        minlengh: [5, 'Description must be at least 5 characters long']
    },
},
    {
        timestamps: true
    }
);

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment;
