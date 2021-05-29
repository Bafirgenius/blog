//Import dependencies
const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    title: { type: String },
    article: { type: String },
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment"
    }]
  });
  module.exports = mongoose.model('article', articleSchema);
