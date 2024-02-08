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

router.get("/patientview",async(req,res)=>{
    let data=await patientmodel.find()
    res.json(data)
})

router.post("/patientsearch",async(req,res)=>{
    let input=req.body
    let data=await patientmodel.find(input)
    res.json(data)
})



module.exports=router