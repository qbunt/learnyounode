var fs = require('fs');
var fileToRead = process.argv[2];

var result = fs.readFile(fileToRead, {}, function (err, data) {
    // console.log(data.toString())
    console.log(data.toString().split('\n').length-1)
});

