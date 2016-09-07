var http = require('http');
var map = require('through2-map');
var port = process.argv[2];
var fs = require('fs');

var server = http.createServer((req, res)=>{
    if(req.method == 'POST'){
        req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
    }
});

server.listen(port);


