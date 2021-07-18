const Review = require("./../model/review");
// const catchAsync = require('./../utils/catchAsync');

exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find();
    res.status(200).json({
      status: "success",
      reviews,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.getReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    res.status(200).json({
      status: "success",
      review,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.createReview = async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json({
      status: "success",
      newReview,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.updateReview = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!review) {
      console.log("Error");
      return;
    }
    res.status(204).json({
      status: "success",
      review,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);

    if (!review) {
      console.log("Error");
      return;
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    console.log(error);
  }
};
