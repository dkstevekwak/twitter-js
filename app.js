var http = require('http');
var express = require( 'express' );
var morgan = require('morgan');

var app = express();
var server = http.createServer();

server.on('request', app);



app.use(morgan('dev'));

app.get('/', function(req, res){
	res.send("h12");
});













server.listen(3107);