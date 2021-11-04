const express = require("express");
const router = express.Router();
const PageController = require("../Controller/PageController");

router.route("/").get(PageController.getHome);
router.route("/about").get(PageController.getAboutPage);
router.route("/add_post").get(PageController.getAddPage);
router.route("/posts/:id").get(PageController.getPostPage);
router.route("/posts/edit/:id").get(PageController.getEditPage);

module.exports = router;
