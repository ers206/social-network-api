 

const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const ReactionSchema = new Schema(
  {
    reactionId: {
      // Use Mongoose's ObjectId data type

      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()  
      
    },
    reactionBody: {

      type: String, 
      required: true, 
      maxLength: 280
      
    },
    createdAt: {
      type: Date,
      default: Date.now,
      
    },
    
  },
  
  {
    
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
  

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;