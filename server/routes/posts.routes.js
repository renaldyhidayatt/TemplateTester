const PostsController = require("../controllers/tutorial.controller");
const { authJwt } = require("../middlewares");

const router = require("express").Router();

router.get("/", PostsController.findAll);
router.post("/create", PostsController.create);
router.get("/published", PostsController.findAllPublished);

router.get("/:id", PostsController.findOne);
router.put("/:id", PostsController.update);
router.delete("/:id", PostsController.delete);

router.delete("/delete/all", PostsController.deleteAll);

module.exports = router;
