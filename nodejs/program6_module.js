var fs = require('fs');
var path = require('path');
var array=[];
module.exports = function (dir,extn,callback){
  fs.readdir(dir,function (err,list){
    if(err)
      return callback(err);
    else{
      list.forEach(function (file) {
        var index=list.indexOf(file);
        if (path.extname(file) === '.' + extn)
          array.push(file);
      })
      return callback(null,array);
    }
  })
}
