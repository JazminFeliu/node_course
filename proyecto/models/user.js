var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://root:root@127.0.0.1:27017/thedbname?authSource=admin");

//validaciones

var email_match = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Coloca un email válido"];
var posibles_valores = ["M","F"];

var password_validation = {validator: function(p){
    return this.password_confirmation == p;
},
message:"Las contraseñas no son iguales"
}

//validaciones personalizadas
var user_schema = new Schema({
    name: String,
    username: {type: String, required:true, maxlength:[50,"Username muy grande"]},
    password: {
        type: String, 
        minlength:[8,"el password es muy corto"],
        validate: password_validation
    },
    age: {type: Number, min:[6,"la edad no puede ser menor que 6"], max:[100,"la edad no puede ser mayor que 100"]},
    email: {type: String, required: "el correo es obligatorio", match:email_match},
    date_of_birth: Date,
    sex: {type: String, enum: {values: posibles_valores, message:"Opción no válida"}}
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
