
const mongoose=require('mongoose');
const Schema=mongoose.Schema
const eventsschema=new Schema({
   
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
        type:String
    }
        
    
})
const Events=mongoose.model('Events',eventsschema);
module.exports=Events