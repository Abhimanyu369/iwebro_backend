const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const PATH = ('/assets/upload/client');

const clientSchema = mongoose.Schema({
  company_name :{
    type : String,
    required : true
  },
  img :{
    type : String,
    required : true
  },
});

const storage = multer.diskStorage({
  destination : (req,file,cb)=>{
    cb(null, path.join(__dirname,'..',PATH));
  },
  filename : (req,file,cb)=>{
    cb(null, file.fieldname+'-'+Date.now());
  }
},{timestamps : true});

clientSchema.statics.upload = multer({storage : storage}).single('img');
clientSchema.statics.path = PATH;

module.exports = mongoose.model('client', clientSchema);