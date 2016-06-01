var p=3000;
var http=require('http');
var server=http.createServer(function(req,res){
    console.log(`${req.method} ${req.url}`);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(`
<html>
<head>
    <title>Hello</title>
</head>
<body>
    <p>Hello world!</p>
    <p>You requested to ${req.method}: ${req.url}</p>
</body>
</html>
`);
});

server.listen(p);
console.log(`Server listening on port ${p}.`);
