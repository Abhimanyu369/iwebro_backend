const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const PATH = ('/assets/upload/benefit');

const benefitSchema = mongoose.Schema({
  title :{
    type : String,
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

benefitSchema.statics.upload = multer({storage : storage}).single('img');
benefitSchema.statics.path = PATH;

module.exports = mongoose.model('benefit', benefitSchema);