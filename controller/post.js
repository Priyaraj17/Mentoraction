const Posts = require("../model/post");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).json({
      status: "success",
      posts,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    res.status(200).json({
      status: "success",
      post,
    });
  } catch (err) {
    throw err;
  }
};

exports.createPost = async (req, res) => {
  try {
    const newPost = await Posts.create(req.body);
    res.status(200).json({
      status: "success",
      newPost,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deletePost = async (req, res) => {
  try {
    await Posts.findByIdAndUpdate(req.params.id, { active: false });
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    throw err;
  }
};
