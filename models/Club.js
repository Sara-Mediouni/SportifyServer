const Temps=require('../models/Temps');
const mongoose=require('mongoose');
const Schema=mongoose.Schema
const clubschema=new Schema({
    Nom_club:{
    type: String,
    required: true
    },
    Activite:[String],
    required: true
    ,
    Nom_entren:{
        type: String
    },
    Temps:{
    type:Temps,
    required: true
    },
    Emplacement:{
        type: String,
        required: true,
    },
    Logo:{
        type: String
    },
    Num_tel:[String],
    Region:{
        type:String,
        required:true
    },
    Gouvernement:{
        type:String,
        required:true
    }
        
    
})
const Club=mongoose.model('Club',clubschema);
module.exports=Club