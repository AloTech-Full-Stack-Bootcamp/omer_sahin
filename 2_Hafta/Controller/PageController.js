const Post = require("../models/Post");

exports.getHome = async (req, res) => {
  const posts = await Post.find({});

  res.render("index", { posts });
};

exports.getAboutPage = (req, res) => {
  res.render("about");
};
exports.getAddPage = (req, res) => {
  res.render("add_post");
};

exports.getPostPage = async (req, res) => {
  const posts = await Post.findById(req.params.id);
  res.render("post", { posts });
};
exports.getEditPage = async (req, res) => {
  const posts = await Post.findById(req.params.id);
  res.render("edit_post", { posts });
};
