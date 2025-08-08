const mongoose = require("mongoose");

const OutputSchema = new mongoose.Schema({
  title: String,
  content: String, //what user input
  outputs: [String], // e.g., ["twitter", "linkedin"]
  result: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  tokenUsage: {
    prompt_tokens: Number,
    completion_tokens: Number,
    total_tokens: Number,
  },
});

module.exports = mongoose.model("Output", OutputSchema);
