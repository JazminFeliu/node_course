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

app.get("/login", function(req, res){
    User.find(function(err,doc){
        console.log(doc);
        res.render("login");
    });    
});

app.post("/users", function(req, res){

    var user = new User({
                        email: req.body.email, 
                        password: req.body.password,
                        password_confirmation: req.body.password_confirmation,
                        username: req.body.username
                        });

    
    user.save().then(function(us){
        res.send("Guardamos el usuario exitosamente");
    }, function(err){
        if(err){
            console.log(String(err));
            res.send("No pudimos guardar la información");
        }
    });

});

app.listen(8080);