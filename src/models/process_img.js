const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const PATH = ('/assets/upload/process');

const processImgSchema = mongoose.Schema({
  img: {
    type: String,
    required: true
  }
}, { timestamps: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', PATH));
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  }
})

processImgSchema.statics.upload = multer({ storage: storage }).single('img');
processImgSchema.statics.path = PATH;

module.exports = mongoose.model('process_img', processImgSchema);