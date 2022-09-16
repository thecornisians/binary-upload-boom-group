const mongoose = require("mongoose")

// create comment schema
const CommentSchema = new mongoose.Schema({
  comment: {type: String, required: true},
  likes: {type: Number, required: true},
  // post will be set to what post is commented
  post: {type: mongoose.Schema.Type.ObjectId, ref: "Post"}
  // timestamps will add a createdAt and updatedAt key value pair
}, {timestamps: true})

// export the comment model
module.exports = mongoose.model("comment", CommentSchema)