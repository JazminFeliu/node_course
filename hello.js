var http = require("http");

var manejador = function(solicitud, respuesta) {
    console.log("Recibimos una nueva petición");
    respuesta.end("Hola Jupiter Nodejs");
};

var servidor = http.createServer(manejador);

servidor.listen(8080);