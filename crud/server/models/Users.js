const mongoose = require("mongoose");

// Define User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// Create User Model and specify the collection name "users"
const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
