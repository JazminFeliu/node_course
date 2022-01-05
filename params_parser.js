function parse(req){
    var arreglo_parametros = [], parametros = {};

    if(req.url.indexOf("?") > 0 ) {
        // /?nombre = Jazmin => ['/','nombre=Jazmin']
            var url_data = req.url.split("?");
            var arreglo_parametros = url_data[1].split("&");
            //[nombre]=Jazmin,data=algo]
        }

        for (var i = arreglo_parametros.length - 1; i >= 0; i--) {
        
            var parametro = arreglo_parametros[i];
            //nombre=Jazmin
            var param_data = parametro.split("=");
            //[nombre,Jazmin]
    
            parametros[param_data[0]] = param_data[1];
            //{nombre:Jazmin}
    
        };
    
    return parametros;
}

module.exports.parse = parse;