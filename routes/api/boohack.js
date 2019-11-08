var mongoose = require('mongoose');
var router = require('express').Router();
var Boohack = mongoose.model('Boohack');
var auth = require('../auth');

router.get('/boohack', auth.required, function(req, res, next){
  Boohack.find({}).then(function(boohacks){
      return res.json({
          boohacks: boohacks.map((item) => {
            item.status = item.date > new Date() ? "бух" : "нух"
            return item;
          })
      })
  })
});

router.post('/boohack/new', auth.required, function(req, res, next){
  var boohack = new Boohack();

  boohack.name = req.body.boohack.name
  boohack.tag = req.body.boohack.tag
  boohack.city = req.body.boohack.city
  boohack.description = req.body.boohack.description
  boohack.date = req.body.boohack.date

  // должно быть все ок
  boohack.bars = req.body.boohack.bars

  boohack.save().then(function(){
    return res.json({boohack: boohack.toJSONFor()});
  }).catch(next);
});

module.exports = router;
