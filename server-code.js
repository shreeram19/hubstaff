var express = require('express');
var bodyParser = require('body-parser'); 
var app = express();
var path = require('path');

app.use(bodyParser());
app.listen(3000, function () {
  console.log('Express JS listening on port 3000!')
})


//To load the static files.
app.use('/', express.static(path.resolve("build/")));
