var http = require('http');
var bl = require('bl')
var url = process.argv[2];
var done = function (response) {
    //response.setEncoding('utf8');
    response.pipe(bl(function (err, data){
      if(err)
        return callback(err);
      else{
        data=data.toString();
      }
      return callback(null, data)
    })
  )
};
function callback(err,data){
  if (err)
    return console.error('There was an error:', err);
  console.log(data.length);
  console.log(data);
}
http.get(url,done);
