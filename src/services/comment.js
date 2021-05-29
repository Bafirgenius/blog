const {commentModel, articleModel} = require('../models')

module.exports = {
    add: async (newComment , articleId) => {
        //Create new article
        const article = await articleModel.findById({_id: articleId})
        console.log(article)
        const commentData = new commentModel(newComment);
        await commentData.save();
        article.comments.push(comm)
        await article.save()
        return commentData;
      },
      update: async (updateComment, commentId) => {
        return await commentModel.findByIdAndUpdate(commentId, updateComment, {
          new: true,
        });
      },
      delete: async (commentId) => {
        return await commentModel.findByIdAndRemove(commentId, {
          new: true,
        });
      },
      getPagination: async ( page, limit) => {
        const totalItem = await commentModel
          .find()
          .countDocuments();
        const activePage = page;
        const totalPage = Math.ceil(totalItem / limit);
    
        return { totalItem, activePage, totalPage };
      },
      find: async (page, limit) => {
        return await commentModel
          .find()
          .limit(limit)
          .skip((page - 1) * limit)
          .exec();
      },
}