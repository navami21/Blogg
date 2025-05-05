const express=require("express")
const router=express.Router();
// const jwt=require('jsonwebtoken')
const posts=require('../model/blogData')
router.use(express.json());


// function verifytoken(req,res,next){
//     let token=req.headers.token;
//     try {
//         if(!token) throw "Unauthorized access"
//         else{
//             let payload=jwt.verify(token,'blogApp');
//             if(!payload) throw 'Unauthorized access';
//             next();
//         }
//     } catch (error) {
//         console.log(error)
//     }

// }

router.get('/', async (req, res) => {
    try {
        const data = await posts.find();
        res.status(200).send(data);  
    } catch (error) {
        res.status(400).send('Data not found');  
    }
});
// router.post('/add',async(req,res)=>{
//     try {
//        const post=req.body;
//        const data=await posts(post).save();
//        res.status(200).send({message:"blog added"})
//        console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// })
router.post('/add', async (req, res) => {
    try {
       const post = req.body;
       const data = await posts(post).save();
       res.status(200).send({ message: "blog added" });
       console.log(data);
    } catch (error) {
        console.log(error);
    } 
});

module.exports=router