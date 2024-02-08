const mongoose=require("mongoose")
const patientSchema=new mongoose.Schema(
    {
        name:String,
        mobileNo:String,
        address:String,
        symptoms:String,
        status:String
    }
)

module.exports=mongoose.model("patient",patientSchema)