var http = require('http');
var bl = require('bl');
var map  = require('map-async');
function httpget(url,callback){
    http.get(url, function (response) {
    //response.setEncoding('utf8');
    response.pipe(bl(function (err, data){
      if(err)
        return callback(err);
      else
        callback(null,data.toString());
    })
    )
  })
};
function callback(err,results){
  if (err)
    return console.error('There was an error:', err);
  results.forEach(item => {
    console.log(item);
  })
}
map(process.argv.slice(2), httpget, callback)
