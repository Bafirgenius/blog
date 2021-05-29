const {articleModel} = require('../models')

module.exports = {
     add: async (newArticle) => {
        //Create new article
        const articleData = new articleModel(newArticle);
        await articleData.save();
        return articleData;
      },
      update: async (updateArticle, articleId) => {
        return await articleModel.findByIdAndUpdate(articleId, updateArticle, {
          new: true,
        });
      },
      delete: async (articleId) => {
        return await articleModel.findByIdAndRemove(articleId, {
          new: true,
        });
      },
      getPagination: async ( page, limit) => {
        const totalItem = await articleModel
          .find()
          .countDocuments();
        const activePage = page;
        const totalPage = Math.ceil(totalItem / limit);
    
        return { totalItem, activePage, totalPage };
      },
      find: async (page, limit) => {
        return await articleModel
          .find()
          .populate({path: "comments"})
          .populate({ path: "cancelPayment", select: ["reason"] })
          .limit(limit)
          .skip((page - 1) * limit)
          .exec();
      },
      
}