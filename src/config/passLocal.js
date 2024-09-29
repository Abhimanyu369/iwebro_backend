const passport = require('passport');
const Local = require('passport-local').Strategy;
const admin = require('../models/admin');

passport.use('local', new Local({
  usernameField : 'email'
},async (email,password,done)=>{
  let data = await admin.findOne({email : email});
  if(data && data.password === password){
    return done(null, data);
  }
  else{
    return done(null, false);
  }
}));

passport.serializeUser((data,done)=>{
  return done(null,data.id);
});
passport.deserializeUser(async (id,done)=>{
  let data = await admin.findById(id);
  if(data){
    return done(null,data);
  }
  else{
    return done(null,false);
  }
})

passport.check = (req,res,next)=>{
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}

passport.setUser = (req,res,next)=>{
  if(req.isAuthenticated()){
    res.locals.user = req.data;
  }
  return next();
}

module.exports = passport;