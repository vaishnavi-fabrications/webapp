const mongoose = require('mongoose');

const ConnectToDB = async () =>{
    mongoose.set('strictQuery',true);
    await mongoose.connect(process.env.MONGO_URI).then(resp=>{
        console.log(resp.connection.host);
    }).catch(err=>{ 
        console.log(err.message);
    })
};

module.exports = ConnectToDB;