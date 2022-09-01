
const mongoose=require('mongoose');
const Schema=mongoose.Schema
const opts = { toJSON: { virtuals: true } };
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
        type:Number
    },
    Date:{
        type:String
    },
    Horaire:{
        type:String
    },
    Gouvernement:{
        type:String
    },
    Region:{
        type:String
    }
        
    
},opts)
const Events=mongoose.model('Events',eventsschema);
module.exports=Events