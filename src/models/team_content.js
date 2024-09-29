const mongoose = require('mongoose');

const teamContentSchema = mongoose.Schema({
  title :{
    type : String,
    required : true
  },
  desc :{
    type : String,
    required : true
  }
},{timestamps : true});

module.exports = mongoose.model('team_content', teamContentSchema);