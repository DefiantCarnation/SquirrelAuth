var express = require('express');
var Sequelize = require('sequelize');

var app = express();

var db = new Sequelize('squirrel', 'root', '', {
  dialect: 'mysql',
  port: 3306,
});

db.authenticate()
  .then(function(err) {
    console.log('Connected to Squirrel database, woohoo!');
  })
  .catch(function(err) {
    console.log('Cannot connect to the Squirrel database, it\'s a sad day D=');
  });

app.listen('3000', function() {
  console.log('listening on port 3000!');
});