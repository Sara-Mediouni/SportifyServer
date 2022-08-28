
const mongoose=require('mongoose');
const Schema=mongoose.Schema
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
        type:String,
    }
        
    
})
const News=mongoose.model('News',newsschema);
module.exports=News