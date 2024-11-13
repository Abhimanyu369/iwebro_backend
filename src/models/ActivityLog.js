const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Client or Vendor
//   role: { type: String, enum: ['client', 'vendor'], required: true }, // User role
  action: { type: String, required: true }, // Action performed
  entityId: { type: mongoose.Schema.Types.ObjectId, refPath: 'entityModel' }, // Reference to the related entity (requirement, profile, etc.)
  entityModel: { type: String, enum: ['Requirement', 'Profile', 'Job'] }, // Type of entity (Requirement/Profile/Job)
  timestamp: { type: Date, default: Date.now }, // Time of activity
});

module.exports = mongoose.model('ActivityLog', activityLogSchema);
