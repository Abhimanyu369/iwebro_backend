const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const PATH = ('/assets/upload/remote_hiring');

const RemoteHiringSchema = mongoose.Schema({
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

RemoteHiringSchema.statics.upload = multer({ storage: storage }).single('img');
RemoteHiringSchema.statics.path = PATH;

module.exports = mongoose.model('remote_hiring', RemoteHiringSchema);