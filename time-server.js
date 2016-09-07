// output "YYYY-MM-DD hh:mm \n"

var net = require('net');
var format = require('strftime');
var server = net.createServer(socket=>{
    socket.write(format('%Y-%m-%d %k:%M')+ '\n');
    socket.end();
});

var port = process.argv[2];
server.listen(port);