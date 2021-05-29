//Import dependencies
const router = require("express").Router();

const commentController = require("../controllers/comment");

router.post("/:articleId/comment", commentController.add);

module.exports = router