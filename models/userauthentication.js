var mongoose=require("mongoose");
var schema=mongoose.Schema;
var userDetailsSchema=new schema({
    username:String,
    password:String,
})
module.exports=mongoose.model('userinfo',userDetailsSchema);