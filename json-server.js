var http = require('http');
var port = process.argv[2];
var url = require('url');

var server = http.createServer((req, res)=>{
    // parse the date object out of the URL
    var parsedDateObj = url.parse(req.url, true);

    // write a new Date into myDate
    var myDate = new Date(parsedDateObj.query.iso);
    var results = {};
    switch (parsedDateObj.pathname){
        case '/api/parsetime':
            results = {
                hour: myDate.getHours(),
                minute: myDate.getMinutes(),
                second: myDate.getSeconds()
            };
        break;
        case '/api/unixtime':
            results = {
                unixtime: myDate.getTime()
            };
        break;
    }

    // check for method and results, otherwise return 404
    if(req.method === 'GET' && results !== undefined){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(results))
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(port);