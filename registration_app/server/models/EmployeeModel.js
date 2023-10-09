const mongoose = require("mongoose");

const eSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const eModule = mongoose.model("registers", eSchema);

module.exports = eModule;
