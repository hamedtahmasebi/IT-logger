const mongoose = require("mongoose");

const TechSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  addedDate: String,
});

module.exports = mongoose.model("Tech", TechSchema);
