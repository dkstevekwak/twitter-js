var http = require('http');
var express = require( 'express' );
var morgan = require('morgan');
var swig = require('swig');
var routes = require('./routes');
var bodyParser = require('body-parser');
var socketio = require('socket.io');
// var data = require('./tweetBank');

var app = express();


var people = [ {name: 'Full'}, {name: 'Stacker'}, {name: 'Son'} ];

//Shorter server creation -- Express .listen() does all the steps of the Longer version
var server = app.listen(3107);

// Longer version -- Create server, turn it on, listen on port:
//Create
// var server = http.createServer();
//Turn the server on
// server.on('request', app);
// Listen
// server.listen(3107);

// giving the server to Sockets
var io = socketio.listen(server);


// Handling Requests

//Check other directories for file requests
app.use(express.static(__dirname + '/public'));
//Set up our logging
app.use(morgan('dev'));

//Parse body of message if it exists
app.use(bodyParser.urlencoded());

// hand off to the Router
app.use('/', routes(io));



app.engine('html', require('swig').renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + "/views");

//For Development -- Remove for production
swig.setDefaults({ cache: false });
















