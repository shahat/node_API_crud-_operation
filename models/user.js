const mongoose = require("mongoose");
const user = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 8,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
  },
  dob: {
    type: Date,
    optional: true,
  }
},{timestamps:true});

module.exports = mongoose.model("user", user);
