var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://root:root@127.0.0.1:27017/thedbname?authSource=admin");


var user_schema = new Schema({
    name: String,
    username: String,
    password: String,
    age: Number,
    email: String,
    date_of_birth: Date
});

user_schema.virtual("password_confirmation").get(function(){
    return this.p_c;
}).set(function(password){
    this.p_c = password;
});

/* tipos de datos que podemos guardar:
String, Number, Date, Buffer, Boolean, Mixed, Objectid, Array */

var User = mongoose.model("User", user_schema);

module.exports.User = User;
