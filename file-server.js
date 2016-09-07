var http = require('http');
var port =  process.argv[2];
var file = process.argv[3];
var fs = require('fs');

var server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/plain'});
    fs.createReadStream(file).pipe(res);
});
server.listen(port);