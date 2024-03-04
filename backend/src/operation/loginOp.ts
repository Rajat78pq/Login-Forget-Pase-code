import client from "../Database/dbConfig";
import { Express,Request,Response } from "express";

const LoginOperation = async(req:Request, res:Response)=>{
    const {Email, Password}= req.body;
    try{
        // check the email is valid or not 
         const result = await client.query(`SELECT * FROM public."Admin" WHERE "Email" = $1`, [Email]);
         const user = result.rows[0];
        // check th password is valid or not 
        const passResult = await client.query(`SELECT * FROM public."Admin" WHERE "Password" = $1`, [Password]);
        const passUser = passResult.rows[0];

        if(!user || !passUser){
            return res.status(401).json({success:false,message:"Invalid Email or Password"});
        }else{
            return res.json({success:true, message:"SuccessFull Login"});
        }
            
    }catch(error){
        console.error(`The error is${error}`);
    }
    
}

export default LoginOperation