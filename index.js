var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello, Kala!")
});
//start the server
const port=8000;
app.listen(port, function(){
  console.log('web app started on port:'+port);

});















// var express = require('express');
// var app = express();
//
// // create a route
// app.post('/hello', function(){
//
//
// });
//
// //start the server
// var server = app.listen(3000, function(){
// var host = server.address().address;
// var port = server.address().port;
//
//  console.log('Example app listening at http://%s:%s', host, port);
//
// });
