import client from "../Database/dbConfig";
import { Express,Request,Response } from "express";


const UpdateEmail =async(req:Request, res:Response)=>{
    const id = req.params.id;
    const {Email, Password} = req.body;
    try{
        await client.query(`UPDATE public."Admin"
        SET "Email"=$1, "Password"=$2
        WHERE "Id" = $3`, [Email,Password, id]);
        res.send('Update Data');
    }catch(err){
        console.error(`my:Error is ${err}`);
    }
}

export default UpdateEmail