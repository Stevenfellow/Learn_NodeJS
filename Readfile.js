var http = require('http');

var fs = require('fs');

http.createServer(function (req, res){
   fs.readFileSync('hope.txt', function(err, data){
   res.writeHead(200, {'content-type': 'text/plain'});
   res.write(data);
   return res.end();
}) 
}).listen(8080);

console.log('Server running at http://localhost:8080/');