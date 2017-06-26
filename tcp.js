var net = require('net')  
     var server = net.createServer(function (socket) {  
       // socket handling logic  
       var date= new Date();
       var result= date.getFullYear() + "-";
       function checker(x){
           if(x <10)
               result+= "0"+x;
           else
           result+= x;
       }
       checker(date.getMonth()+1);
       result+="-";
       checker(date.getDate());
       result+=" ";
       checker(date.getHours());
       result+=":";
       checker(date.getMinutes());
       socket.end(result);
     });
     server.listen(process.argv[2]); 