function render(html, variables){

    for (var i = variables.length - 1; i >= 0; i--) {
        //[nombre, apellido]
        var variable = variables[i];
        //parametros[variables[variable]]
        //parametros[]
        var value = eval(variables[i]);  
        html_string = html_string.replace("{"+variables[i]+"}", parametros[variable]);

    };

}