const tempsschema=require('../models/Temps');
const mongoose=require('mongoose');
const Schema=mongoose.Schema
const clubschema=new Schema({
    nom_club:{
        type: String,
     required:true,
        trim:true,
      
   
   
    },


    activite:{
         type:[String],
         default:null,
         required:true,
         trim:true,
   
    },
 
    nom_entren:{
         type: String,
         default:null
    },

    temps:{
         type:[mongoose.Schema.Types.ObjectId],
         ref:'Temps',
         default:null
       
    },

    emplacement:{
         type: String, 
         default:null,
    },
    logo:{
         type: String,
         default:null,
    },
    num_tel:{
     type:[String],
     default:null,
    },
    region:{
         type:String,
         default:null,
        
    },
    gouvernement:{
         type:String,
         default:null,
        
    }
        
    
})
module.exports=mongoose.model('Club',clubschema);
