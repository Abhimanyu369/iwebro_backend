const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const PATH = ('/assets/upload/testimonial');

const testimonialSchema = mongoose.Schema({
  name :{
    type : String,
    required : true
  },
  rating :{
    type : Number,
    required : true
  },
  desc :{
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

testimonialSchema.statics.upload = multer({storage : storage}).single('img');
testimonialSchema.statics.path = PATH;

module.exports = mongoose.model('testimonial', testimonialSchema);