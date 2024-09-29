const mongoose = require('mongoose');

const marqueeSchema = mongoose.Schema({
  title :{
    type : String,
    required : true
  }
},{timestamps : true});

module.exports = mongoose.model('marquee', marqueeSchema);