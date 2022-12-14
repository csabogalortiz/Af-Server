const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new Schema({

  username: {
    type: String,
    required: [true, 'Username required'],
    minlengh: [3, 'Username must have at least 3 characters'],
    unique: true
  },


  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true
  },

  password: {
    type: String,
    required: [true, 'Password required'],
    minlengh: [4, 'Password must have at least 4 characters']
  },
  profileImg: {
    type: String,
    default: 'https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419'
  },

  coverImg: {
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


  myPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    }
  ],

  sharedPosts: [
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

userSchema.pre('save', function (next) {

  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(this.password, salt)
  this.password = hashedPassword

  next()
})

module.exports = model('User', userSchema)

