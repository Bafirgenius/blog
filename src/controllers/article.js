const articleService = require('../services/article')

module.exports = {
    add: async (req, res) => {
        
        const { body } = req;

        //insert appointment
        const newArticle = {
        ...body,
        };
        try {
        const savedArticle = await articleService.add(
            newArticle
        );
        res.send({ status: 200, data: savedArticle });
        } catch (err) {
        res.status(400).json({ error: err.message });
        }
    },
    update: async (req, res) => {
        const { body } = req;
        const {articleId} = req.params
    //update user
        const updateArticle = { ...body };
            
        try {
        const saveUpdatearticle = await articleService.update(updateArticle, articleId);
        res.send({ status: 200, message: saveUpdatearticle });
        } catch (err) {
        res.status(400).json({ error: err.message });
        }
    },
    delete: async (req, res) => {
        const {articleId} = req.params
        
        try {
            const deleteArticle = await articleService.delete(articleId); 
            res.send({ status: 200, message: deleteArticle });
        } catch (err) {
            res.status(400).json({ error: err.message }); 
        }
        
    },
    browse: async (req, res) => {
        const { user } = req
        // destructure page and limit and set default values
        const { page = 1, limit = 10 } = req.query;
        try {
          const article = await articleService.find(+page, +limit);
    
          //get total documents
          const pageInfo = await articleService.getPagination(+page, +limit);
    
          res.status(200).send({ data: article, ...pageInfo });
        } catch (err) {
          res.status(400).json({ error: err.message });
        }
      },
    
}