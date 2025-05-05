const express=require("express")
const router=express.Router();
// const jwt=require('jsonwebtoken')
const userModel=require('../model/userData')
router.use(express.json());
router.use(express.urlencoded({extended:true}));



router.post('/login',async(req,res)=>{
   try {
    const user= await userModel.findOne({email:req.body.email});
    if(!user){
        res.status(404).send({message:'User not found'})
    } else{
        if(user.password==req.body.password){
            res.status(200).send({message:'Login Successful'})
        }
        else{
            res.status(404).send({message:'Invalid credentials!'})
        }
    }
   } catch (error) {
            res.status(404).send({message:'Error in server!'})

   }

})


module.exports=router