#!/usr/bin/env node

import app = require('../server');
var http = require('http');

var server = http.createServer(app);

server.listen(app.get('port'), function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express angular app is listening on port:' + port);
});
