//Import dependencies
const router = require("express").Router();

const commentController = require("../controllers/comment");

router.post("/:articleId/comment", commentController.add);

router.put("/:commentId/comment", commentController.update)

router.delete("/:commentId/comment", commentController.delete)

router.get("/comment", commentController.browse)


module.exports = router