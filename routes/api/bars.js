var mongoose = require('mongoose');
var router = require('express').Router();
var Bar = mongoose.model('Bar');
var auth = require('../auth');

router.get('/bars', auth.required, function(req, res, next){
  Bar.find({}).then(function(bars){
      return res.json({bars})
  })
});

router.post('/bars/new', auth.required, function(req, res, next){
  var bar = new Bar();

  bar.name = req.body.bar.name;
  bar.address = req.body.bar.address;
  bar.boohacks_count = 0;
  bar.position = req.body.bar.position;

  bar.save().then(function(){
    return res.json({bar: bar.toJSONFor()});
  }).catch(next);
});

module.exports = router;
