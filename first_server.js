const http = require('http')
const server = http.createServer(function(request, response){
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write('Hello world');
    response.end();
}).listen(3000);

console.log('Server running at http://localhost:8080/');