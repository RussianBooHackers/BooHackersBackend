var mongoose = require('mongoose');
var router = require('express').Router();
var Photo = mongoose.model('Photo');

router.get('/img/:img', function(req, res, next){
  Photo.findOne({_id: mongoose.Types.ObjectId(req.params.img)}).then(function(data){

    console.log(data.contentType,);
    res.writeHead(200, {
      'Content-Type': data.contentType,
      'Content-Length': data.base64.length
    });
    res.end(data.base64);
  }).catch((err) => {
    res.json({type: "bad_image", err})
  })
});

module.exports = router;
