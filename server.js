const http=require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Hello World!\n');
});
const PORT=3000;
server.listen(PORT,()=>{
    console.log('servidor rodando');
});