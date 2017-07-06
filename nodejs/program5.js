var fs = require('fs');
path = require('path');
var _path=process.argv[2];
var extn=process.argv[3];
function files(callback){
  fs.readdir(_path,function (err,list){
    if(err)
      return callback(err);
    else{
      list.forEach(function (file) {
        if (path.extname(file) === '.' + extn)
        console.log(file);
      })
      return callback(null, list)
    }
  });
}
function callback(err,list){
  if (err)
    return console.error('There was an error:', err);
}
files(callback);
