var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

module.exports = function (io) {

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list, showForm: true, tweeter: name } );
});

router.get('/users/:name/tweets/:id', function(req, res) {
  var name = req.params.name;
  var idN = req.params.id;
  var list = tweetBank.find( {id: idN} );
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list} );
});

router.post('/submit', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  io.sockets.emit('new_tweet', { name: name, text: text });
  res.redirect('/');
});

return router;

};

