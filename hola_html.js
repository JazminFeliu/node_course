//como leer un archivo en nodejs https://nodejs.org/dist/latest-v16.x/docs/api/fs.html

var http = require("http"),
    fs = require("fs");

http.createServer(function(req, res){ 
    fs.readFile("./index.html", function(err, html){
           
        res.writeHead(200,{"Content-Type":"application/json"})

        res.write(JSON.stringify({nombre: "Jazmin", username:"jazmin"}));
        res.end();
    });
}).listen(8080);




