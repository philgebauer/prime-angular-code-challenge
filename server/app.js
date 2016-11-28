var express = require('express');
var app = express();
var path = require('path');
var superpowers = require('./routes/superpowers.js');
var heroes = require('./routes/heroes.js');

// Routes
app.use('/superpowers', superpowers);
app.use('/heroes', heroes);

// serve static files
app.use(express.static(path.resolve('./public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

app.listen(3000, function() {
  console.log("server running, check localhost:3000");
});
