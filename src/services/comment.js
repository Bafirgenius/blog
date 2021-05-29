const {commentModel, articleModel} = require('../models')

module.exports = {
    add: async (newComment , articleId) => {
        //Create new article
        const article = await articleModel.findById({_id: articleId})
        console.log(article)
        const commentData = new commentModel(newComment);
        await commentData.save();
        article.comments.push(commentData)
        await article.save()
        return commentData;
      },
}