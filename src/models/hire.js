const mongoose = require('mongoose');

const hireSchema = mongoose.Schema({
  company_name :{
    type : String,
    required : true
  },
  email :{
    type : String,
    required : true
  },
  phone :{
    type : String,
    required : true
  },
  desc :{
    type : String,
    required : true
  },
  requirement :{
    type : String,
    required : true
  },
  tech :{
    type : Array,
    required : true
  },
  time :{
    type : String,
    required : true
  },
  time_type :{
    type : String,
    required : true
  }
},{timestamps : true});

module.exports = mongoose.model('hire', hireSchema);