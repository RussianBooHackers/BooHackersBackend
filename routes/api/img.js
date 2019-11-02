var mongoose = require('mongoose');
var router = require('express').Router();
var Photo = mongoose.model('Photo');

router.get('/img/:img', function(req, res, next){
  Photo.find({_id: mongoose.Types.ObjectId(req.params.img)}).then(function(img){
    return res.send(img)
  })
});

module.exports = router;
