const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs')
mongoose.promise = Promise

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  twitterID: String,
  localId: String,
  email: { 
    type: String, 
    require: true,
    maxlength: 255,
    minlength: 5
  },
  password: { 
    type: String,
    minlength: 10,
    maxlength:1024 
  },
  date: { type: Date, default: Date.now },
  credits: { type: Number, default: 0 },
  plan: { type: Number, default: 1 },
  profilePic: String,
  verified: {type: String, default: 'False'}
});

// Define hooks for pre-saving
userSchema.pre('save', function(next) {
  if (!this.isModified('password'))
    return next();
  bcrypt.hash(this.password,10,(err,passwordHash)=>{
    if(err)
      return next(err);
    this.password = passwordHash;
    next();
  });
});

// Define schema methods
userSchema.methods.comparePassword = function(password,cb){
  bcrypt.compare(password,this.password,(err,isMatch)=>{
    if(err)
      return cb(err);
    else{
      if(!isMatch)
        return cb(null,isMatch);
      return cb(null,this);
    }
  });
}



module.exports = mongoose.model('users', userSchema);