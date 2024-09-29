const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const PATH = ('/assets/upload/skill');

const skillSchema = mongoose.Schema({
  skill_name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
}, { timestamps: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', PATH));
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  }
})

skillSchema.statics.upload = multer({ storage: storage }).single('img');
skillSchema.statics.path = PATH;

module.exports = mongoose.model('skill', skillSchema);