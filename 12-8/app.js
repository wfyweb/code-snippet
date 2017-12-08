// 手写node服务器

var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var server = http.createServer(function(req,res){
     var pathname = url.parse(req.url).pathname;
    if(req.url.indexOf(".")== -1){
        pathname += "./index.html";
    };
    var fileURL = "./"+path.normalize(pathname);
    //console.log(1,fileURL);
    fs.readFile(fileURL,function(err,data){
        if(err){console.log(err)};
        res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        res.end(data);
    })
});
server.listen(3000);

