var mongoose = require('mongoose');

var BoohackSchema = new mongoose.Schema({
  "name": String,
  "tag": String,
  "city": String,
  "users": Array,
  "description": String,
  "date": String,
  "bars": Array
});

BoohackSchema.methods.toJSONFor = function(user){
  return {
    id: this._id,
    name: this.name,
    tag: this.tag,
    city: this.city,
    users: this.users,
    description: this.description,
    date: this.date,
    bars: this.bars,
  };
};

mongoose.model('Boohack', BoohackSchema);
