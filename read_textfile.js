//Blocking code example concept
var fs = require('fs');

var data = fs.readFileSync('hope.txt');

console.log(data.toString());
console.log("The program is ended")