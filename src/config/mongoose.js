const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://iwebro15:NjQppBiCrz05Hdwv@iwebro.uzuyin9.mongodb.net/?retryWrites=true&w=majority&appName=iwebro");
// mongoose.connect("mongodb://127.0.0.1/Form");

const db = mongoose.connection;

db.once('open', (err) => {
  if (err) {
    console.log('Db not connect.');
    return false;
  }
  console.log("Db connect.");
})

module.exports = db;