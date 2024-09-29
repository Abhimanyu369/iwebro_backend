const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const PATH = ('/assets/upload/user_resume');

const applyDeveloperSchema = mongoose.Schema({
  // companyId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'company'
  // },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'job'
  },
  jobName: {
    type: String,
    required: true
  },
  full_name: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  expertise: {
    type: String,
    required: true
  },
  technology: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  linkedin: {
    type: String,
    required: true
  },
  availability: {
    type: String,
    required: true
  },
  framework: {
    type: String,
    required: true
  },
  programming_language: {
    type: String,
    required: true
  },
  browser: {
    type: String,
    required: true
  },
  database: {
    type: String,
    required: true
  },
  web_server: {
    type: String,
    required: true
  },
  operating_system: {
    type: String,
    required: true
  },
  cv: {
    type: String,
    required: true
  },
  // talent: {
  //   type: String,
  //   default: false
  // }
}, { timestamps: true });


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', PATH));
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  }
})

applyDeveloperSchema.statics.upload = multer({ storage: storage }).single('cv');
applyDeveloperSchema.statics.path = PATH;

module.exports = mongoose.model('apply_developer', applyDeveloperSchema);