
// from pizza-hunt reply and comments change to thoughts and reactions 

const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    thoughtText: {
      type: String,
      required: true,
    // must be between 1 and 280 characters 
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }, 
    username: {
      type: String,
      required: true,
    },
    // reactions are like replies in pizza hunt 
    reactions:[ReactionSchema]
 },
 {
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
}
);

const ReactionSchema = new Schema(
  {
    reactionId: {
      // Use Mongoose's ObjectId data type
// Default value is set to a new ObjectId/ from mod below in reply schema
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()  

    },
    reactionBody: {
      type: String,
      required: true
      // 280 character max 
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    // use ThoughtSchema to validate data for a reply
    replies: [ThoughtSchema]
  },
 
  {
    // from mod below 
    toJSON: {
      getters: true
    }
  }
);
// from mod not sure i need this 
// CommentSchema.virtual('replyCount').get(function() {
//   return this.replies.length;
// });

const Comment = model('Comment', CommentSchema);

module.exports = Comment;