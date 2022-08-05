
const mongoose=require('mongoose');
const Schema=mongoose.Schema
const tempsschema=new Schema({
   
    Horaire:{
        type:String,
       
    },
    Jours:{
        type:String,
    
    }
        
    
})
const Temps=mongoose.model('Temps',tempsschema);
module.exports=Temps