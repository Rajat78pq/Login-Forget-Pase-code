import Express from 'express';
import cors from 'cors';
import LoginOperation from './operation/loginOp';
import ForgetOperation from './operation/forgetOp';
import UpdateEmail from './operation/updateEmail';

const app = Express();

const PORT = process.env.PORT || 2000;

app.use(cors())
app.use(Express.json());

app.listen(PORT, ()=>{
    console.log(`App is runing on port http://localhost:${PORT} `);
})

app.get('/hello', (req, res)=>{
    res.send("Hello Future");
})

app.post('/login', LoginOperation);
app.post('/forget',ForgetOperation);
app.put('/update/:id', UpdateEmail);


const corsOptions = {
    origin: 'http://localhost:5173',
  };
  
  app.use(cors(corsOptions));




// app.delete('/login/:id',async(req, res)=>{
//     const id = parseInt(req.params.id);
//     try{
//         await client.query(`DELETE FROM public."Admin"
//         WHERE id = $1`, [id]);
//         res.send("delete data");
//     }catch(err){
//         console.error(`my error is ${err}`);
//     }
// })
