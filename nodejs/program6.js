var path = require('path');
var mymodule = require('./program6_module');
var dir = process.argv[2];
var extn = process.argv[3];
var callback = function (err, list) {
    if (err)
      return console.error('There was an error:', err);
    list.forEach(function (file) {
      console.log(file)
    })
}
mymodule(dir,extn,callback);
