'use strict';

var port    = process.env.PORT,
    express = require('express'),
    morgan  = require('morgan'),
    app     = express(),
    http    = require('http').Server(app),
    io      = require('socket.io')(http);

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../public'));

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(port);

