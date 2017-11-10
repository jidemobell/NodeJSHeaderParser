const express = require('express');
const bodyparser = require('body-parser');
const Address6 = require('ip-address').Address6;
const reqIp = require('request-ip')

const app = express();
const port = process.env.PORT||8080
app.use(bodyparser.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    let output = req.headers['user-agent']
   let lang = req.headers['accept-language']
   let ip = new Address6(req.socket.address().address);
   let ipv4 = ip.inspectTeredo();

   var IP = req.headers['x-forwarded-for'] ||
   req.connection.remoteAddress ||
   req.socket.remoteAddress ||
req.connection.socket.remoteAddress;


   let jsonOutput = {
    ipaddress:IP,
    language: lang.substring(0,lang.lastIndexOf(',')),
    software: output.substring(output.lastIndexOf('(')+1,output.lastIndexOf(')'))
}

res.json(jsonOutput);
console.log(req.headers['x-forwarded-for'])

})

app.listen(port,()=>{
    console.log('Node JS app running on port ',port)
});