const http= require("http");
const url =require ("url");
const httpServer=http.createServer(function(req, res){
 //   console.log("Sta code",res.statusCode());
 var parseurl=url.parse(req.url,true);
    console.log("server created");
    console.log("Req Method",req.method)
    console.log("Req url",req.url)
    console.log("Req params",parseurl.params)
    console.log("Req Query",parseurl.query)
    console.log("Req Body",parseurl.body)
    res.end("Hello world");
});

httpServer.listen(3000,function(){
    console.log("Server started on port 3000")
});
