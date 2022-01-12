var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var User = require("./models/user").User;
var cookieSession = require("cookie-session");
var router_app = require("./routes_app");
var session_middleware = require("./middlewares/session");


app.use(express.static('public'));
app.use(bodyParser.json());  //para peticiones application/json
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieSession({
        name: "session",
        keys: ["llave1","llave2"]
}));

app.set("view engine", "jade");

app.get("/", function(req, res){
    console.log(req.session.user_id);
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

    User.findOne({email:req.body.email,password:req.body.password},function(err,user){
        req.session.user_id = user._id;
        res.redirect("/app");

    });
    
});

app.use("/app", session_middleware);
app.use("/app", router_app);

app.listen(8080);