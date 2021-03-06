var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;

var UserSchema = new mongoose.Schema({
  username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
  photo_link: String,
  name: String,
  achievements: Array,
  boohacks: Array,
  photos: Array,
  rating: { type: Number },
  hash: String,
  salt: String
});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

UserSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.generateJWT = function() {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
};

UserSchema.methods.toAuthJSON = function(){
  return {
    "id": this._id,
    "token": this.generateJWT(),
    "username": this.username,
    "photo_link": "https://mysterious-plateau-80675.herokuapp.com/telega_ava.php?img=" + this.username,
    "name": this.name,
    "achievements": this.achievements,
    "boohacks": this.boohacks,
    "photos": this.photos,
    "rating": this.rating
  };
};

mongoose.model('User', UserSchema);
