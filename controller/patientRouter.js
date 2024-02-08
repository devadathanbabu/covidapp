const express=require("express")
const router=express.Router()
const patientmodel=require("../model/patientModel")

router.post("/patiententry",async(req,res)=>{
    let data=req.body
    let patiententry=new patientmodel(data)
    let result=await patiententry.save()
    res.json({
        status:"success"
    }
    )
})



module.exports=router