const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    default: null,
  },
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  source: String,
  profilePhoto: String,
});

module.exports = mongoose.model("user", userSchema);