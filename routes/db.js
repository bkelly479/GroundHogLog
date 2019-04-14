//require('dotenv').config();
var mysql = require('mysql');

try{
  var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

}catch(err){
  throw err;
}

connection.connect(function(err){
  if(err){
    throw err;
  }else{
    console.log('Database connection established.')
  }
});

module.exports = connection;
