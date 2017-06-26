var fs= require("fs");
var http = require('http') ; 
     var server = http.createServer(function (req, res) {  
       // request handling logic... 
     var readStream = fs.createReadStream(process.argv[3]);

  // This will wait until we know the readable stream is actually valid before piping
  readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });
     })  
     server.listen(process.argv[2]); 