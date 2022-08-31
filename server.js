const express=require('express');
const mongoose=require('mongoose');
const path = require('path');
const {MongoClient}=require('mongodb');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const { application } = require('express');
const PORT=process.env.PORT||3000
const ClubRoute=require('./routes/ClubRoutes')
const EventsRoute=require('./routes/EventsRoutes')
const NewsRoute=require('./routes/NewsRoutes')
const app=express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
const uri="mongodb+srv://Sara:admin@cluster0.cxqyjam.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri,{ useNewUrlParser : true,
    useUnifiedTopology: true });
const db=mongoose.connection
db.on('error',(err)=>{
    console.log(err);
})
db.once('open',()=>{
    console.log('Database Connection established !')
})


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
app.use('/api/club',ClubRoute)
app.use('/api/event',EventsRoute)
app.use('/api/news',NewsRoute)
app.use('/images',express.static('images'))
app.use('/uploadsevent',express.static('uploadsevent'))
app.use('/uploadsnew',express.static('uploadsnews'))
console.log(__dirname)
