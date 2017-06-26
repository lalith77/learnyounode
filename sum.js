var len= process.argv.length-1;
var sum=0;
while(len>1){
 sum += Number(process.argv[len]); 
    len--;
}

console.log(sum);