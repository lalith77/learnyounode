var http= require("http");
var concatStream = require("concat-stream");
http.get(process.argv[2], function callback(response){

 response.pipe(concatStream(function (data) { 
        var chars= data.toString().split("");
        console.log(chars.length);
        console.log(data.toString());

     }))

   
})  
