var express = require('express');
var greetingsCount = 0;

var app = express();
var namesGreeted='';
var greeted=[];


app.get('/', function(req, res){
    res.send("Hello, Kala!")
});

app.get('/Greetings/:names', function(req, res){
  greeted.push({'name':req.params.names});
  res.send("Greetings: " + req.params.names);
});

app.get('/Greeted', function(req, res){
  var name = req.params.name;
  var Greetings={};
  for(var i=0;i<greeted.length;i++){
    var greetedNames=greeted[i];
    // if(greetedNames[name]===undefined){

  }

  res.send(greeted);
});


app.get('/Counter/:name', function(req, res){
var name = req.params.name;
var greetingsCount = 0;
for(var i=0;i<greeted.length;i++){
  if(greeted[i].name === name){
    greetingsCount++;
}

  }

    res.send("Has been greeted" +' '+ greetingsCount +' ' +"times");

});

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
