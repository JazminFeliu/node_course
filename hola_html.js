//como leer un archivo en nodejs https://nodejs.org/dist/latest-v16.x/docs/api/fs.html

var http = require("http"),
    fs = require("fs");

fs.readFile("./index.html", function(err, html){
    http.createServer(function(req, res){        
        res.write(html);
        res.end();
    }).listen(8080);
});    




