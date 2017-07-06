var http = require('http')
var map = require('through2-map')
var port = Number(process.argv[2]);
var server = http.createServer(function (req, res) {
  req.pipe(map(function (chunk) {
       return chunk.toString().toUpperCase();
     }))
    req.pipe(res);
});
server.listen(port);
