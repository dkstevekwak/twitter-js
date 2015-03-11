var http = require('http');
var express = require( 'express' );
var morgan = require('morgan');
var swig = require('swig');
var routes = require('./routes');
var bodyParser = require('body-parser');

// var data = require('./tweetBank');

var app = express();
var server = http.createServer();

var people = [ {name: 'Full'}, {name: 'Stacker'}, {name: 'Son'} ];


//Turn the server on
server.on('request', app);
//Check other directories for file requests
app.use(express.static(__dirname + '/public'));
//Set up our logging
app.use(morgan('dev'));

//Parse body of message if it exists
app.use(bodyParser.urlencoded());

// hand off to the Router
app.use('/', routes);



app.engine('html', require('swig').renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + "/views");

//For Development -- Remove for production
swig.setDefaults({ cache: false });













server.listen(3107);