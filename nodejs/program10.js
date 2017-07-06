var net = require('net')
var strftime = require('strftime')
var date = new Date();
var server = net.createServer(function (socket,req) {
  socket.write(String(strftime('%F %H:%M',date))+"\n");
  socket.end();
})
server.listen(Number(process.argv[2]));
