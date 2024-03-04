import client from "../Database/dbConfig";
import { Express,Request,Response } from "express";
import nodemailer from 'nodemailer';

const ForgetOperation =async(req:Request, res:Response)=>{
    const {Email} = req.body;
    try{
        const result = await client.query(`SELECT * FROM public."Admin" WHERE "Email" = $1`, [Email]);
         const user = result.rows[0];
         console.log(user);

         if(!user){
             res.status(401).json({success:false,message:"Invalid Email or Password"});
        }else{
            const testAccount = await nodemailer.createTestAccount();

            const transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                auth: {
                    user: testAccount.user,
                    pass: testAccount.pass
                }
            });

            const message = {
                from: `"Rajat ku. jena" <rajatkumarjena@example.com>`,
                to: 'bloggerrejo@gail.com',
                subject: `forget Password`,
                text: 'You have to click link otherwise OTP',
                html: "<b>Hello future</b>",
            };

            transporter.sendMail(message).then((info)=>{
                return res.status(201).json({
                    msg:"message received",
                    info: info.messageId,
                    preview: nodemailer.getTestMessageUrl(info)
            });  
            
            }).catch(error =>{
                console.log(`its email error : ${error}`);
            })

        }
    }catch(err){
        console.error(`my Error is : ${err}`);
    }
};

export default ForgetOperation
