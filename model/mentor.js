const mongoose = require("mongoose");
const validator = require("validator");
const slugify = require("slugify");
const { ObjectId } = mongoose.Schema.Types;

const mentorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please tell us your name"],
    },
    slug: String,
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provied a valid email"],
    },
    photo: {
      type: String,
      default: "default.jpg",
    },
    domain: {
      type: String,
      required: [true, "Please provide your Field"],
    },
    imageCover: {
      type: String,
      required: [true, "A tour must have a cover image"],
    },
    images: [String],
    currentMentees: {
      type: String,
    },
    college: {
      type: String,
      required: [true, "Please specify your college"],
    },
    presentCompany: {
      type: String,
      required: [true, "Name of the company should be present"],
    },
    summary: {
      type: String,
    },
    about: String,
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be above 1.0"],
      max: [5, "Rating must be below 5.0"],
      set: (val) => Math.round(val * 10) / 10,
    },
    projects: [
      {
        type: String,
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

mentorSchema.index({ slug: 1 });

// Populating reviews
mentorSchema.virtual("reviews", {
  ref: "Review",
  foreignField: "mentor",
  localField: "_id",
});

// save the name of the mentor as a slug in the DB.
mentorSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
