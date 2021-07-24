const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const mentor = require("../model/mentor");

const DB = "mongodb+srv://Priyaraj17:admin@cluster0.jpl4n.mongodb.net/test";

const mongo = mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB connection successful!`));

// READ JSON FILE
const mentors = JSON.parse(
  fs.readFileSync(`${__dirname}/devData.json`, "utf-8")
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await mentor.create(mentors);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await mentor.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
