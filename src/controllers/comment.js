const commentService = require('../services/comment')

module.exports = {
    add: async (req, res) => {
        
        const { body } = req;
        const {articleId} = req.params
        console.log(articleId)

        //insert appointment
        const newComment = {
        ...body,
        };
        try {
        const savedComment = await commentService.add(
            newComment, articleId
        );
        res.send({ status: 200, data: savedComment });
        } catch (err) {
        res.status(400).json({ error: err.message });
        }
    },
}