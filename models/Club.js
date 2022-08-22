const tempsschema=require('./news');
const mongoose=require('mongoose');
const Schema=mongoose.Schema
const opts = { toJSON: { virtuals: true } };
const clubschema=new Schema({
    Nom_club:{
        type: String,
        trim:true,
      
   
   
    },


    Activite:{
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
     
        type:String,
        default:null
    },
    Num_tel:{
     type:[String],
     default:null,
     trim:true,
    },
    Region:{
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
