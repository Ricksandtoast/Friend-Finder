var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});

//html routes
require('./app/routing/htmlRoutes.js')(app);
// api routes
require('./app/routing/apiRoutes.js')(app);