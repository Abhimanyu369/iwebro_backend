const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const PATH = ('/assets/upload/team');

const team2Schema = mongoose.Schema({
  username :{
    type : String,
    required : true
  },
  position :{
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

team2Schema.statics.upload = multer({storage : storage}).single('img');
team2Schema.statics.path = PATH;

module.exports = mongoose.model('team2', team2Schema);