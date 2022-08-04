const express=require('express');
const mongoose=require('mongoose');
const {MongoClient}=require('mongodb');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const { application } = require('express');
const PORT=process.env.PORT||3000

const app=express();
const uri="mongodb+srv://Sara:admin@cluster0.cxqyjam.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
const db=mongoose.connection
db.on('error',(err)=>{
    console.log(err);
})
db.once('open',()=>{
    console.log('Database Connection established !')
})
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})


