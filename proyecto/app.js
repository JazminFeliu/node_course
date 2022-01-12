var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var User = require("./models/user").User;


app.use(express.static('public'));
app.use(bodyParser.json());  //para peticiones application/json
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "jade");

app.get("/", function(req, res){
    res.render("index");
});

app.get("/signup", function(req, res){
    User.find(function(err,doc){
        console.log(doc);
        res.render("signup");
    });    
});

app.get("/login", function(req, res){
        res.render("login");  
});

app.post("/sessions", function(req, res){

    User.findOne({email:req.body.email,password:req.body.password},function(err,docs){
        console.log(docs);
        res.send("Hola Jupiter");
    })
    
});

app.listen(8080);