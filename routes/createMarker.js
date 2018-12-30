var express = require('express');
var router = express.Router();
var db = require('./db');
var bodyParser = require('body-parser');

var multer = require('multer');

//instructions as to where and how to store images
var storage = multer.diskStorage({
  //destination
  destination: function(req, file, cb){
    cb(null, 'public/images/uploads/');
  },
  //define name
  //random hash plus original file name, should be big enough to avoid duplicates
  filename: function(req, file, cb){
    cb(null, Math.random().toString(36).substr(2, 9)+ '-' + file.originalname)
  }
});

//add the upload variable and define the storage
const upload = multer({storage: storage});


//add marker to database
router.post('/', upload.single('ghImg'), function(req, res, next) {
  //vars for lat and lng
  var lat = req.body.lat;
  var lng = req.body.lng;

  //var for the pic
  var pic = req.file;

  var qry;
  //add marker to the Database
  if(req.file === undefined){
    qry = 'INSERT INTO markers(lat,lng) VALUES(' + lat + ' ,' + lng + ')';
  }else{
    qry ='INSERT INTO markers(lat,lng,imgname) VALUES(' + lat + ' ,' + lng + ', "' + pic.filename + '")';
  }

  console.log(qry);

  db.query(qry, function(error, results, fields){
    if(error){
      console.log(error);
    }
  });

  //render page
  res.render('index', { title: 'Express' });
});

module.exports = router;
