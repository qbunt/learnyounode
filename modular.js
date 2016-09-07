var fs = require('fs');
var path = require('path');

var scan = (dir, filterString, cb) => {
    if(filterString === ""){
        cb('no filter provided');
        return;
    }
    if(dir === undefined){
        cb('no directory provided');
        return;
    }
    fs.readdir(dir, (err, list) => {
        if (err!==null)
            return cb(err);

        var filtered = list.filter(item => path.extname(item).replace('.', '') == filterString);
        cb(null, filtered);
    });
};
module.exports = scan;