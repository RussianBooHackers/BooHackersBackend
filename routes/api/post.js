var mongoose = require('mongoose');
var router = require('express').Router();
var Post = mongoose.model('Post');
var Photo = mongoose.model('Photo');
var auth = require('../auth');

router.get('/post', auth.required, function(req, res, next){
  Bar.find({}).then(function(bars){
      return res.json({bars})
  })
});

router.post('/post/new', auth.required, function(req, res, next){
    var photo = new Photo();
    photo.base64 = req.body.photo;

    photo.save().then(function(){
        var post = new Post();

        post.owner = mongoose.Types.ObjectId(req.body.post.owner);
        post.text = req.body.post.text;
        post.photo = req.body.post.photo;
        post.text = req.body.post.text;
        post.likes = 0;
        post.date = req.body.post.date;
        post.bar = req.body.post.bar;
        post.boohack_id = req.body.post.boohack_id;
        post.city = req.body.post.city;
        post.photo = `http://localhost:3000/img/${photo.getId()}`;

        post.save().then(function(){
          return res.json({post: post.toJSONFor()});
        }).catch(next);
    })
});

module.exports = router;
