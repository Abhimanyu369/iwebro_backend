const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ['ONGOING', 'COMPLETED'], default: 'ONGOING' },
  profiles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
});

module.exports = mongoose.model('Jobb', jobSchema);
