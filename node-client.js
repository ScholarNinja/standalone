'use strict';

var doc = require('./scholarninja/app/scripts/browserified/document');

var http = require('http');

var port = {
  postMessage: function (message) {
    return message;
  }
}

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  console.log(req);
  res.end(JSON.stringify(doc.find(req, port)));
}).listen(8999);

