const express = require('express');
require('dotenv').config({path:".env"});
const ConnectToDB = require('./config/Database');
const itemRoute = require('./routes/itemRoute');
const cors = require('cors');

const app = express();
ConnectToDB();

// const CorsOptions = {
//     origin:["https://vaishnavi-fabrications-lyart.vercel.app","http://192.168.29.31:3000"],
//     credentials:true
// }

app.use(cors({
    origin:"https://vaishnavi-fabrications-lyart.vercel.app",
    credentials:true
}));


app.get('/',(req,res)=>{
    res.send("Welcome to server");
});

app.use(express.json());
app.use('/api/v1/item',itemRoute);


app.listen(process.env.PORT,()=>{
    console.log("server started");
});
