const mongoose = require('mongoose');

const requirementSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: String,
  selectedProfiles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
  status: { type: String, enum: ['PENDING', 'IN_PROGRESS', 'COMPLETED'], default: 'PENDING' },
});

module.exports = mongoose.model('Requirement', requirementSchema);
