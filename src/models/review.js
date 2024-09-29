const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const PATH = ('/assets/upload/review');

const reviewSchema = mongoose.Schema({
  name :{
    type : String,
    required : true
  },
  designation :{
    type : String,
    required : true
  },
  desc :{
    type : String,
    required : true
  },
  link : {
    type : String,
    required : true
  },
  img :{
    type : String,
    required : true
  },
},{timestamps : true});

const storage = multer.diskStorage({
  destination : (req,file,cb)=>{
    cb(null, path.join(__dirname,'..',PATH));
  },
  filename : (req,file,cb)=>{
    cb(null, file.fieldname+'-'+Date.now());
  }
})

reviewSchema.statics.upload = multer({storage : storage}).single('img');
reviewSchema.statics.path = PATH;

module.exports = mongoose.model('review', reviewSchema);