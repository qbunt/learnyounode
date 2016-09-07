var fs = require('fs');
var fileToRead = process.argv[2];

var result = fs.readFileSync(fileToRead, {});

console.log(result.toString().split('\n').length-1)