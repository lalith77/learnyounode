var fs= require("fs");
var path= require("path");
var diry= process.argv[2];
fs.readdir(diry, function(err,list){

    if(err)
    return console.log("There is an error");

    for(var i=0; i< list.length; i++)
    {
        if(path.extname(list[i])== "."+process.argv[3]){
            console.log(list[i]);
        }
    }
})