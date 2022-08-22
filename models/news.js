
const mongoose=require('mongoose');
const Schema=mongoose.Schema
const newsschema=new Schema({
   
    image:{
        type:String,
       
    },
    description:{
        type:String,
    
    }
        
    
})
const News=mongoose.model('News',newsschema);
module.exports=News