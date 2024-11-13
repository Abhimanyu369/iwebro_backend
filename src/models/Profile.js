const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Vendor name
  techStacks: { type: String, required: true }, // Technologies expertise
  experience: { type: Number, required: true }, // Years of experience
  passingYear: { type: Number, required: true }, // Graduation passing year
  file: { type: String, required: true }, // PDF file path
  status: {
    type: String,
    enum: ["AVAILABLE", "ENGAGED"],
    default: "AVAILABLE",
  },
  jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
});

module.exports = mongoose.model("Profile", profileSchema);
