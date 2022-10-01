// from pizzahunt will need to change pizza to users 

const { Schema, model } = require('mongoose');
// not needed 
// const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
  {
    username: {
      type: String,
// It says "Unique" in mod 18 docs 
      // unique:    
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      // unique: 
      // must match a valid email (look into mongoose matching vallidation) 
    },
    // array of _id values referencing the Though model/ that wat needs to be in thoughts 
    thoughts: [],
    // Array of _id values referencing the User model (self-reference) 
    friends: [],
  },
  {
    // below is from mod 
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// get total count of comments and replies on retrieval
// changed comments to friends and comment to friend 
UserSchema.virtual('friendCount').get(function() {
  return this.friends.reduce(
    (total, friend) => total + friend.replies.length + 1,
    0
  );
});

const User = model('User', UserSchema);

module.exports = User;