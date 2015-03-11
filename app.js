var http = require('http');
var express = require( 'express' );
var morgan = require('morgan');
var swig = require('swig');
var app = express();
var server = http.createServer();

var people = [ {name: 'Full'}, {name: 'Stacker'}, {name: 'Son'} ];



server.on('request', app);

app.use(morgan('dev'));

app.engine('html', require('swig').renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + "/views");

//For Development -- Remove for production
swig.setDefaults({ cache: false });

app.get('/', function(req, res){
	res.render( 'index', {title: 'Hall of Fame', people: people} );
});












server.listen(3107);