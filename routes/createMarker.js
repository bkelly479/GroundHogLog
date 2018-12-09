var express = require('express');
var router = express.Router();
var db = require('./db');
var bodyParser = require('body-parser');



//add marker to database
router.post('/', function(req, res, next) {
  //vars for lat and lng
  var lat = req.body.lat;
  var lng = req.body.lng;


  //add marker to the Database
  db.query('INSERT INTO markers(lat,lng) VALUES(' + lat + ' ,' + lng + ')', function(error, results, fields){
    if(error){
      console.log(error);
    }
  });

  //render page
  res.render('index', { title: 'Express' });
});

module.exports = router;
