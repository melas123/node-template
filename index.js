// var colors  = require('colors');
var express = require('express')
var app     = express()
var server  = app.listen(3000);

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index',{list:  ['val1', 'val2', 'val3']});
})
app.get('/tables', function (req, res) {
    res.render('pages/tables');
});
// console.log("Express server listening on port 3000");
