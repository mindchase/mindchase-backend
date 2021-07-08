const mongoose = require("mongoose");
const { Schema } = mongoose;

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  route: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  video: {
    type: String
  },
  presentation: {
    type: String
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Course", CourseSchema);
