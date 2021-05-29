const commentService = require('../services/comment')

module.exports = {
    add: async (req, res) => {
        
        const { body } = req;
        const {commentId} = req.params
        //insert appointment
        const newComment = {
        ...body,
        };
        try {
        const savedComment = await commentService.add(
            newComment, commentId
        );
        res.send({ status: 200, data: savedComment });
        } catch (err) {
        res.status(400).json({ error: err.message });
        }
    },
    update: async (req, res) => {
        const { body } = req;
        const {commentId} = req.params
    //update user
        const updateComment = { ...body };
            
        try {
        const saveUpdateComment = await commentService.update(updateComment, commentId);
        res.send({ status: 200, message: saveUpdateComment });
        } catch (err) {
        res.status(400).json({ error: err.message });
        }
    },
    delete: async (req, res) => {
        const {commentId} = req.params
        
        try {
            const deleteArticle = await commentService.delete(commentId); 
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
          const article = await commentService.find(+page, +limit);
    
          //get total documents
          const pageInfo = await commentService.getPagination(+page, +limit);
    
          res.status(200).send({ data: article, ...pageInfo });
        } catch (err) {
          res.status(400).json({ error: err.message });
        }
      },
}