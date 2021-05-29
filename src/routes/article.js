//Import dependencies
const router = require("express").Router();

const articleController = require("../controllers/article")

router.post("/article", articleController.add);

router.put("/:articleId/article", articleController.update)

router.delete("/:articleId/article", articleController.delete)

router.get("/article", articleController.browse)

module.exports = router