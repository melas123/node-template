// var colors  = require('colors');
var express = require('express')
var app     = express()
var server  = app.listen(3000);

app.get('/', function (req, res) {
    res.send('Hello World')
})

// console.log("Express server listening on port 3000");
