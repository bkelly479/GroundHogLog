var express = require('express');
var router = express.Router();
var db = require('./db');
var bodyParser = require('body-parser');



/* GET home page. */
router.post('/', function(req, res, next) {
  var lat = req.body.lat;
  var lng = req.body.lng;

  console.log("lat: " + lat);
  console.log("lng: " + lng);

  //console.log(req.body);



  //add marker to the Database
  db.query('INSERT INTO markers(lat,lng) VALUES(' + lat + ' ,' + lng + ')', function(error, results, fields){
    if(error){
      console.log(error);
    }
  });
  
  res.render('index', { title: 'Express' });
});

module.exports = router;
