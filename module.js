var scanner = require('./modular');

scanner(process.argv[2], process.argv[3], (err, data)=>{
    if(err){
        console.error(err);
        return;
    }
    data.forEach((item)=>console.log(item))
});
