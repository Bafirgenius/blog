//Import dependencies
const mongoose = require('mongoose')

// MODEL
const commentSchema = mongoose.Schema({
    // code here
    text: { 
      type: String,
      unique: false
    }
  
  })
  module.exports = mongoose.model('comment', commentSchema)