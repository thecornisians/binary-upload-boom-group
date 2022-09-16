const Comments = require("../models/Comments")

module.exports = {
  createComment: async (req,res) => {
    try {
      await Comments.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
      })
      console.log("Comment added")
      res.redirect(`/post/${req.params.id}`)
    } catch (error) {
      console.log(error)
    }
  }
}