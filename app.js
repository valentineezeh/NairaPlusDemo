var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var ejs = require("ejs");

var app = express();

app.use(function (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, '/assets')));
app.use(express.static(path.join(__dirname, '/css')));
app.use(express.static(__dirname + "/public"));


app.get('/', function (req, res) {
    res.render('index', {
        title: "Nairaplus"
    });
});

app.get('/signup', function (req, res) {
    res.render('signup', {
        title: "Nairaplus - Signup"
    });
});

app.get('/back-office', function (req, res) {
    res.render('back-office', {
        title: "Nairaplus - Admin Dashboard",
    });
});

app.get('/agent-office', function (req, res) {
    res.render('agent-office', {
        title: "Nairaplus - Agent",
    });
});


var port = process.env.port || 3000;
app.listen(port);
console.log('Server started on port ' + port);

module.exports = app;
