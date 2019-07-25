const http = require('http'),
    path = require('path'),
    fs = require('fs'),
    port = process.env.PORT || 3000;


function handleServerRequests(req,res){
    console.log(req.method,req.url);
    if(req.url=='/'||req.url==""){
        fs.createReadStream('./index.html').pipe(res);
    }else if(req.url.toLowerCase().includes('chart.min.js')){
        fs.createReadStream('./Chart.min.js').pipe(res)
    }else if(req.url==='/favicon.ico'|| req.url.toLowerCase().includes('favicon.ico')){
        fs.createReadStream('./favicon.ico').pipe(res)
    }else {
        res.end('404: Not found \n go to /')
    }
}


let server = http.createServer(handleServerRequests)
server.listen(port)
console.log('server running on port',port)