
const mongoose=require('mongoose');
const Schema=mongoose.Schema
const tempsschema=new Schema({
   
    Horaire:{
        type:String,
        required:true
    },
    Jours:{
        type:String,
        required:true
    }
        
    
})
const Temps=mongoose.model('Temps',tempsschema);
module.exports=Temps