var http = require('http');

http.get(process.argv[2], (resp)=>{
    // resp.setEncoding('utf8');
    var myData = [];
    resp.on('start', (data) => {
        // console.log(data.toString())
    })
    resp.on('data', (data) => {
        // console.log(data.toString())
        myData.push(data)
    })
    resp.on('end', data => {
        var length = myData.join('').length;
        console.log(length)
        console.log(myData.join(''))
    })
})