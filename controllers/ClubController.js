const Club=require('../models/Club');
const Temps = require('../models/Temps');
const storage=require('../middleware/multer-config')
const fs=require('fs')
const multer=require('multer')
const path=require('path');
const { extname } = require('path');
var ObjectId = require('mongodb').ObjectId;
var clubs=[];
//Liste des clubs
const index=(req,res,next)=>{
    Club.find()

.then((clubs)=>{
    const a=[];
    
   // console.log(clubs);
 clubs.map((c)=> {
    c.Activité.map((act)=>{a.push(act);
        })
        
})
})
.catch((error)=>{
 return res.status(400).json({error})
})
}


//Show club by ID
const show=(req, res, next)=>{
   
        Club.findOne({ _id: req.params.id })
          .then(club => res.status(200).json(club))
          .catch(error => res.status(404).json({ error }));
}



//Club par activité
const findByAct=(req, res, next)=>{
   
    Club.find({ activite: req.params.activite })
      .then(club => res.status(200).json(club))
      .catch(error => res.status(404).json({ error }));
}
//Club par region
const findByRegion=(req, res, next)=>{
   
    Club.find({ region: req.params.region })
      .then(club => res.status(200).json(club))
      .catch(error => res.status(404).json({ error }));
}
//Club par gouvernement
const findByGouv=(req, res, next)=>{
   
    Club.find({ gouvernement: req.params.gouvernement })
      .then(club => res.status(200).json(club))
      .catch(error => res.status(404).json({ error }));
}



//Ajout du club
const store=(req,res,next)=>{
    let cl=new Club();
    {if(req.file && req.file.originalname)
        {cl=new Club({...req.body,Logo:req.file.filename}, { strict: false });
       }
        else{cl=new Club({...req.body}, { strict: false });
        }}
    cl.save()
     
    .then((club)=>{
        return res.status(203).json({club})
 
 
    })
    .catch((error)=>{
     return res.status(400).json({error})
    })
 }

//Find by id et mettre à jour des clubs
const update=(req, res, next)=>{
  if((req.file && req.file.originalname))
        Club.updateOne({ _id: req.params.id }, { ...req.body,Logo:req.file.filename, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Club updated with Logo successfully !'}))
          .catch(error => res.status(400).json({ error }));
    else{
        Club.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Club updated without Logo successfully !'}))
        .catch(error => res.status(400).json({ error }));
    }
}

//delete club by id
const destroy=(req, res, next)=>{
    Club.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Club deleted successfully !'}))
    .catch(error => res.status(400).json({ error }));
}


module.exports={
    index,show,store,update,destroy,findByAct,findByGouv,findByRegion
}