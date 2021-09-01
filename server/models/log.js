const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  msg: String,
  tech: String,
  date: String,
  attention: Boolean,
});

module.exports = mongoose.model("Log", LogSchema);
