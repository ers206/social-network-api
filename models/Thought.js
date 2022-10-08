// var mongoose = require('mongoose');
// var validate = require('mongoose-validator');
// from pizza-hunt reply and comments change to thoughts and reactions 

const { Schema, model, Types } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');


const ReactionSchema = new Schema(
  {
    reactionId: {
      // Use Mongoose's ObjectId data type
      // Default value is set to a new ObjectId/ from mod below in reply schema
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()  
      
    },
    reactionBody: {
      // type: String,
      // required: true, 
      // 280 character max 
      type: String, 
      required: true, 
      maxLength: 280
      
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: createdAtVal => dateFormat(createdAtVal)
    },
    // use ThoughtSchema to validate data for a reply
  },
  
  {
    // from mod below 
    toJSON: {
      getters: true
    }
  }
  );
  
 
  const ThoughtSchema = new Schema(
    {
    
      thoughtText: {

         type: String,
         required: true,
         maxLength: 280
     
      },
      createdAt: {
        type: Date,
        default: Date.now,
        // get: createdAtVal => dateFormat(createdAtVal)
      }, 
      username: {
        type: String,
        required: true,
      },
      
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
  
  // CommentSchema.virtual('replyCount').get(function() {
//   return this.replies.length;
// });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;