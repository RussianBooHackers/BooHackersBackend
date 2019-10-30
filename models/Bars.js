var mongoose = require('mongoose');

var BarSchema = new mongoose.Schema({
  "name": String,
  "address": String,
  "boohacks_count": Number,
  "rating": Number,
  "marks": Array,
  "position": {
    "lat": Number,
    "lng": Number
  }
});

BarSchema.methods.toJSONFor = function(){
  return this;
};

mongoose.model('Bar', BarSchema);
