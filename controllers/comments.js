// require comment model
const Comments = require("../models/Comments")

module.exports = {
  createComment: async (req,res) => {
    try {
      // create comment object
      await Comments.create({
        // comment will come from input in views
        comment: req.body.comment,
        // likes always start at 0
        likes: 0,
        // comment belongs to the post with this id
        post: req.params.id,
      })
      console.log("Comment added")
      // redirect back to post to update changes
      res.redirect(`/post/${req.params.id}`)
    } catch (error) {
      console.log(error)
    }
  }
}