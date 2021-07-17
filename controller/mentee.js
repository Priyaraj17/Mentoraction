const Mentees = require("../model/mentee");

exports.getAllMentees = async (req, res) => {
  try {
    const mentees = await Mentees.find();
    res.status(200).json({
      status: "success",
      mentees,
    });
  } catch (err) {
    throw err;
  }
};

exports.getMentee = async (req, res) => {
  try {
    const mentee = await Mentees.findById(req.params.id);
    res.status(200).json({
      status: "success",
      mentee,
    });
  } catch (err) {
    throw err;
  }
};

exports.createMentee = async (req, res) => {
  try {
    const newMentee = await Mentees.create(req.body);

    res.status(201).json({
      status: "success",
      newMentee,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMentee = async (req, res) => {
  try {
    await Mentees.findByIdAndUpdate(req.params.id, { active: false });
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    throw err;
  }
};
