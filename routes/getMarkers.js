var express = require('express');
var router = express.Router();
var db = require('./db');

//get all markers from database
router.get('/', function(req, res, next) {

  console.log('error is in get');

  db.query('SELECT * FROM markers', function(error, results, fields){
    if(error){
      console.log(error);
    }else{
      res.send(results);
    }
  });
  //res.render('index', { title: 'Express' });
});

module.exports = router;
