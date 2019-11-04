var mongoose = require('mongoose');

var PhotoSchema = new mongoose.Schema({
    base64: Buffer,
    contentType: String
});

PhotoSchema.methods.getId = function(user){
    return this._id;
};

PhotoSchema.methods.toJSONFor = function(user){
  return this;
};

PhotoSchema.methods.getBase64 = function(base64){
    return base64.base64;
}

mongoose.model('Photo', PhotoSchema);
