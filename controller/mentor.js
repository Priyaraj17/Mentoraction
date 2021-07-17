const Mentors = require("../model/mentor");

exports.getAllMentors = async (req, res) => {
  try {
    const mentors = await Mentors.find();
    res.status(200).json({
      status: "success",
      mentors,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getMentor = async (req, res) => {
  try {
    const mentor = await Mentors.findById(req.params.id);
    res.status(200).json({
      status: "success",
      mentor,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createMentor = async (req, res) => {
  try {
    const newMentor = await Mentors.create(req.body);
    res.status(201).json({
      status: "success",
      newMentor,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMentor = async (req, res) => {
  try {
    await Mentors.findByIdAndUpdate(req.params.id, { active: false });
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    throw err;
  }
};
