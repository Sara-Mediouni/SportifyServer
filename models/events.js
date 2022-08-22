
const mongoose=require('mongoose');
const Schema=mongoose.Schema
const eventsschema=new Schema({
   
    image:{
        type:String,
       
    },
    description:{
        type:String,
    
    }
        
    
})
const Events=mongoose.model('Events',eventsschema);
module.exports=Events