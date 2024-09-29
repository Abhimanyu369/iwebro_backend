const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const PATH = ('/assets/upload/project');

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
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

projectSchema.statics.upload = multer({ storage: storage }).single('img');
projectSchema.statics.path = PATH;

module.exports = mongoose.model('project', projectSchema);