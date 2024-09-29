const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const PATH = ('/assets/upload/developer_detail');

const devDetailSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    required: true
  },
  skills: {
    type: Array,
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

devDetailSchema.statics.upload = multer({ storage: storage }).single('img');
devDetailSchema.statics.path = PATH;

module.exports = mongoose.model('dev_detail', devDetailSchema);