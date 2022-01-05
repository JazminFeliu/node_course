//como crear un motor de vistas propio. Render

var http = require("http"),
    fs = require("fs");

http.createServer(function(req, res){ 
    fs.readFile("./index.html", function(err, html){

    var html_string = html.toString();
    
    //Expresion regular que busca en el HTML donde haya {x}
    var variables = html_string.match(/[^\{\}]+(?=\})/g);
    var nombre = "Codigo Facilito";

    // variable ['nombre']
    for (var i = variables.length - 1; i >= 0; i--) {
    
    //lo ejecutamos como codigo de javaScript
    //para obtener el valor de dicha variable
        var value = eval(variables[i]);

        //reemplazar el contenido con llaves {x} por su valor correspondiente
        html_string = html_string.replace("{"+variables[i]+"}", value);

    };
        //enviamos el contenido
        res.writeHead(200,{"Content-Type":"text/html"})

        res.write(html_string);
        res.end();
    });
}).listen(8080);