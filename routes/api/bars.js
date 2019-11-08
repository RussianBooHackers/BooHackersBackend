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

router.post('/bars/test', auth.required, function(req, res, next){
  console.log(req.body.length);
  for(var i = 0; i < req.body.length; i++){
    var bar = new Bar();

    bar = req.body[i];
  
    bar.name = req.body[i].name;
    bar.address = req.body[i].address;
    bar.boohacks_count = 0; 
    bar.position = req.body[i].position;
  
    bar.save().then(function(){
      if(i === req.body.length){
        return res.json({bars: req.body});
      }
    }).catch(next);
  }
});

module.exports = router;
