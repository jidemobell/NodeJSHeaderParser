const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port = process.env.PORT||8080
app.use(bodyparser.urlencoded({extended:true}));



app.get('/', (req,res)=>{
    let output = req.headers['user-agent']
   let lang = req.headers['accept-language']
 

   var ip = req.headers['x-forwarded-for'].split(',')[0] ||
   req.connection.remoteAddress ||
   req.socket.remoteAddress ||
 req.connection.socket.remoteAddress;

   console.log(ipMiddleware);
   let jsonOutput = {
    ipaddress:ip,
    language: lang.substring(0,lang.lastIndexOf(',')),
    software: output.substring(output.lastIndexOf('(')+1,output.lastIndexOf(')'))
}

res.json(jsonOutput);


})

app.listen(port,()=>{
    console.log('Node JS app running on port ',port)
});