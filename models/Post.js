var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    "owner": mongoose.Schema.Types.ObjectId,
    "text": String,
    "photo": String,
    "likes": Number,
    "date": String,
    "bar": Number,
    "boohack_id": Number,
    "city": String,
    "who_likes": Array
});

PostSchema.methods.toJSONFor = function(user){
  return {
    id: this._id,
    owner: this.owner,
    text: this.text,
    photo: this.photo,
    likes: this.likes,
    date: this.date,
    bar: this.bar,
    boohack_id: this.boohack_id,
    city: this.city,
  };
};

mongoose.model('Post', PostSchema);
