const mongoose = require("mongoose");

const hiringSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, required: true },
  experienceLevel: { type: String, required: true },
  budget: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Hiring", hiringSchema);
