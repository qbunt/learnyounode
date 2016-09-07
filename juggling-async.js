var http = require('http');
var urls = [];
for (var i = 2; i < 5; i++) {
    urls.push({complete:false, url:process.argv[i]});
}

urls.forEach(item =>{
    http.get(item.url, (resp)=>{
        var myData = [];
        resp.on('data', (data) => {
            myData.push(data)
        })
        resp.on('end', data => {
            item.complete = true;
            item.data = myData.join('');
            if(isStackComplete()){
                urls.forEach(item=>console.log(item.data))
            }
        })
    })
});

var isStackComplete = () => {
    return urls.filter(item => item.complete === true).length == urls.length;
};
