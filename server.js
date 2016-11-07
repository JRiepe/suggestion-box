// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require('express');
var app = express();
var PORT = process.env.PORT || 8081;

// mongodb things

var mongojs = require('mongojs');
var databaseUrl = "mongodb://heroku_8lkdjw38:qhuj10slp7qeh7efojgc2mm8ju@ds145997.mlab.com:45997/heroku_8lkdjw38";
var collections = ["box"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log('Database Error:', err);
});





app.use('/js', express.static(__dirname + '/js'));
app.use('/views', express.static(__dirname + '/views'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/css', express.static(__dirname + '/css'));
// app.use('/partials', express.static(__dirname + '/partials'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});


