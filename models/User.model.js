const { Schema, model } = require('mongoose')

const userSchema = new Schema({

  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profileImg: {
    type: String,
  },

  bio: {
    type: String,
  },

  role: {
    type: String,
    enum: ['USER', "ADMIN"],
    default: 'USER'
  },

  favPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    }
  ],

  reTweetedPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    }
  ],

  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  ],



},

  {
    timestamps: true
  }
);

module.exports = model('User', userSchema)

