var fs = require('fs');
var buffer,lines;
function count(callback){
    fs.readFile(process.argv[2],function (err,data) {
    buffer = data.toString();
    lines = buffer.split('\n');
    callback();
  });
}
function number(){
  console.log(lines.length-1);
}
count(number);
