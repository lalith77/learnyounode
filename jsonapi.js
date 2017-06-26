const url=require("url");
const http= require("http");
var server= http.createServer(function (req, res) {
    var urlObj = url.parse(req.url,true);  // true results in parsing the query string.
    var pathname = urlObj.pathname;
    var time = urlObj.query.iso;
    var result;
if(pathname== "/api/parsetime"){
    var date = new Date(Date.parse(time));
    result= {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}
if(pathname=="/api/unixtime"){
    result= { unixtime : Date.parse(time)};

}

 if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  }
});
server.listen(process.argv[2]);