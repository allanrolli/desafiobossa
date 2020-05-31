const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
User.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 8);
  this.password = hash;
  next();
});

module.exports = mongoose.model("User", User);
