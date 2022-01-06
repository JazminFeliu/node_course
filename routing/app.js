var express = require("express");

var app = express();

app.set("view engine", "jade");

//Método Http= GET / POST / PUT / DELETE / OPTIONS / HEADERS / PATCH

app.get("/:nombre", function(req, res){
    res.render("form",{nombre: req.params.nombre});
});    


app.get("/", function(req, res){
    res.render("index");
});

app.post("/", function(req, res){
    res.render("form")
});

app.listen(8080);