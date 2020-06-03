const mongoose = require("mongoose");

const ToolSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "tools" }
);

module.exports = mongoose.model("Tools", ToolSchema);
