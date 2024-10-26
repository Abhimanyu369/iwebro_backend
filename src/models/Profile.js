const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  title: { type: String, required: true },
  file: { type: String, required: true }, // PDF file path
  status: { type: String, enum: ['AVAILABLE', 'ENGAGED'], default: 'AVAILABLE' },
  jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
});

module.exports = mongoose.model('Profile', profileSchema);
