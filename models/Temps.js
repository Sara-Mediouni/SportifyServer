const mongoose=require('mongoose');
const Schema=mongoose.Schema
const temps=new Schema({
    jour:{
        type:String,
       
    },
     horaire:{
        type:String,
    
    }
})
module.exports=mongoose.model('Temps',temps);
