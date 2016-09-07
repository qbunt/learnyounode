var fs = require('fs');
var path = require('path');
var directoryToScan = process.argv[2];
var extensionToFilter = process.argv[3];

// console.log(directoryToScan);
// console.log(extensionToFilter);

fs.readdir(directoryToScan, {}, (err, list)=>{

    // console.log()
    var filtered = list.filter((item)=>{
        return path.extname(item).replace('.','')==extensionToFilter
    });
    filtered.forEach((item)=>console.log(item))
    // console.log(filtered)
})