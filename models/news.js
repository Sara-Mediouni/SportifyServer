
const mongoose=require('mongoose');
const Schema=mongoose.Schema
const opts = { toJSON: { virtuals: true } };
const newsschema=new Schema({
   
    Image:{
        type:String,
       
    },
     Titre:{
        type:String,
    
    },
    Description:{
        type:String,
    
    },
    Ordre:{
        type:Number,
    }
        
    
},opts)
const News=mongoose.model('News',newsschema);
module.exports=News