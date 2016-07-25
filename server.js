List = require('./repository/');
list = new List(null);

var Parser = require("./pull_modules/podcast/");

var NAPull = new Parser();
NAPull.parse('http://nightattack.tv/feed/audio', function(input){ list.render(input) });

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send(list.getList());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
