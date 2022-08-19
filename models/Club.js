const tempsschema=require('../models/Temps');
const mongoose=require('mongoose');
const Schema=mongoose.Schema
const opts = { toJSON: { virtuals: true } };
const clubschema=new Schema({
    Nom_club:{
        type: String,
        trim:true,
      
   
   
    },


    Activité:{
         type:[String],
         default:null,
         required:true,
         trim:true,
   
    },
 
    Nom_entren:{
         type: String,
         default:null,
         trim:true,
    },

    Temps:{
         type:mongoose.Schema.Types.Array,
         ref:'Temps',
         default:null,
         trim:true,
       
    },

    Emplacement:{
         type: String, 
         default:null,
         trim:true,
    },
    Logo:{
     
        type:String
    },
    Num_tel:{
     type:[String],
     default:null,
     trim:true,
    },
    Région:{
         type:String,
         default:null,
         trim:true,
        
    },
    Gouvernement:{
         type:String,
         default:null,
         trim:true,
        
    }
        
    
},opts)
module.exports=mongoose.model('Club',clubschema);
