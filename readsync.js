var fs= require('fs');
var path= process.argv[2];
var stringy= fs.readFileSync(path).toString();
var lines= stringy.split("\n").length;
console.log(lines-1);
