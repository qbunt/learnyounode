var http = require('http');
var port = process.argv[2];
var url = require('url');
var server = http.createServer((req, res)=>{
    console.log(req.url)

    switch (req.url){
        case '':
        break;
    }

    if(req.method == 'get'){
    }
});

server.listen(port);