let http=require('node:http');

const hostname='127.0.0.1';
const port=3000;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Ja Ja turja bsdk bsdk\n');
});


server.listen(port,hostname,()=>{
    console.log(`Server run at http://${hostname}:${port}/`);
})