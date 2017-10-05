// var colors  = require('colors');
var express = require('express')
var app     = express()
var server  = app.listen(3000);

app.use(express.static('public'));
app.use(express.static('src/views'));
app.get('/', function (req, res) {
    res.send('Hello World')
})

// console.log("Express server listening on port 3000");
