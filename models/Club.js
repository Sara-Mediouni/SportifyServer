const tempsschema=require('../models/Temps');
const mongoose=require('mongoose');
const Schema=mongoose.Schema
const clubschema=new Schema({
    Nom_club:{
        type: String,
       // required:true
   
   
    },


    Activite:{
         type:[String],
   
    },
 
    Nom_entren:{
         type: String
    },

    Temps:{
         type:[mongoose.Schema.Types.ObjectId],
         ref:'Temps',
       
    },

    Emplacement:{
         type: String, 
    },
    Logo:{
         type: String
    },
    Num_tel:[String],
    Region:{
         type:String,
        
    },
    Gouvernement:{
         type:String,
        
    }
        
    
})
const Club=mongoose.model('Club',clubschema);
module.exports=Club