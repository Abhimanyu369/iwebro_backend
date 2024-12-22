const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    howCanWeHelp: { type: String, enum: ["Recruiting", "Developer"], required: true },
    skills: [{ type: String }], // Array of skills
    source: { type: String },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

module.exports = mongoose.model("Query", querySchema);