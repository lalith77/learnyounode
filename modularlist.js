var module= require("./module.js");

 module(process.argv[2], process.argv[3], function callback(err, result){ // module function is called along with the callback definition

    if (err) {
        return console.error('There was an error:', err)
      }
     for(var i=0; i<result.length; i++){
         console.log(result[i]);
     }
 })