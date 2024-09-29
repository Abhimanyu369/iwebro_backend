const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
  companyId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'company'
  },
  contractTime :{
    type : Number,
    required : true
  },
  noResources :{
    type : Number,
    required : true
  },
  technology :[String],
  jobName :{
    type : String,
    required : true
  },
  salary :{
    type : String,
    required : true
  },
  // requirement : {
  //   type : Number,
  //   required : true
  // },
  status : {
    type : Boolean,
    default : false
  }
},{timestamps : true});

module.exports = mongoose.model('job', jobSchema);