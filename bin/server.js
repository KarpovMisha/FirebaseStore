var express = require('express');
var path = require('path');

var app = express();
var port = 8080;

app.use(express.static('static'));

// app.get("*", function(req, res) {
  // res.sendFile(path.join(__dirname, '../index.html'));
// });

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.log("Express server listening on port", port);
  }
});