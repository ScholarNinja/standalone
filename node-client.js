'use strict';

var http = require('http');
var url = require('url');

// Shim Chrome's messaging functionality
global.port = function(res) {
  var result = {
    postMessage: function (message) {
      res.end(JSON.stringify(message));
    }
  }
  return result;
}

http.createServer(function (req, res) {
  var query = url.parse(req.url, true).query.q;
  var resPort = global.port(res);
  res.writeHead(200, {'Content-Type': 'application/json'});
  doc.find(query, resPort);
}).listen(8999);
