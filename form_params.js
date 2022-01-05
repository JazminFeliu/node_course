//como crear un motor de vistas propio. Render

var http = require("http"),
    fs = require("fs");
    parser = require("./params_parser.js");
    render_view = require("./render_view.js");

var p = parser.parse;
var r = render_view = render_view;

http.createServer(function(req, res){ 

    if(req.url.indexOf("favicon.ico") > 0 ) {return;}

    fs.readFile("./index.html", function(err, html){

    var html_string = html.toString();
    var variables = html_string.match(/[^\{\}]+(?=\})/g);
    var nombre = "Código Facilito";   

    var parametros = p(req);


        res.writeHead(200,{"Content-Type":"text/html"})

        res.write(html_string);
        res.write(render(html_string, parametros));
        res.end();
    });
}).listen(8080);