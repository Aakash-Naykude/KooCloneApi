const {Schema,model} = require("mongoose");

const userSchema = new Schema({
    "name" : {required:true,type:String},
    "password" : {required:true,type:String},
    "email" : {required:true,type:String},
    "username" : {required:true,type:String},
    "mobilenumber":{required:true, type:Number}
   
},{
    versionKey:false,
    timestamps:true
});

module.exports = new model("user",userSchema);
