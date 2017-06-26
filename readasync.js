var fs=require('fs');
var path= process.argv[2];
fs.readFile(path, function(err,data){
    if(err){
        return console.log("error");
    }

    var lines= data.toString().split("\n").length;
    console.log(lines-1);
});