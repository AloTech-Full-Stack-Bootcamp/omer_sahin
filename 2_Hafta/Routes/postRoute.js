const express = require("express");
const router = express.Router();
const PostController = require("../Controller/PostController");

router.route("/").post(PostController.getCreate);
router.route("/:id").put(PostController.getUpdate);
router.route("/:id").delete(PostController.getDelete);


module.exports = router;