var mongoose = require('mongoose');

var PhotoSchema = new mongoose.Schema({
    base64: Buffer
});

PhotoSchema.methods.getId = function(user){
    return this._id;
};

PhotoSchema.methods.toJSONFor = function(user){
  return this;
};

mongoose.model('Photo', PhotoSchema);
