const Users = require("../model/users");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json({
      status: "success",
      users,
    });
  } catch (err) {
    throw err;
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (err) {
    throw err;
  }
};

exports.createUser = (req, res) => {
  res.status(200).json({
    status: "success",
    results: 100,
  });
};

exports.deleteUser = async (req, res) => {
  try {
    await Users.findByIdAndUpdate(req.params.id, { active: false });
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    throw err;
  }
};
