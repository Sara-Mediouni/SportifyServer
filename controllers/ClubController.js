const Club=require('../models/Club');
const Temps = require('../models/news');
const storage=require('../middleware/multer-config')
const fs=require('fs')
const multer=require('multer')
const path=require('path');
const { extname } = require('path');
var ObjectId = require('mongodb').ObjectId;
var clubs=[];
//Liste des clubs
const indexactivty=(req,res,next)=>{
  if ((req.params.region!=="null")&&(req.params.gouvernement!=="null"))
  {Club.find({$and: [{ Gouvernement: req.params.gouvernement},{Region: req.params.region }]})
  .then((clubs)=>{
    const a=[];
    
   // console.log(clubs);
 clubs.map((c)=> {
    c.Activite.map((act)=>{a.push(act);
        })
        
})
  const b=[...new Set(a)];
  res.status(200).json(b)
})
.catch((error)=>{
 return res.status(400).json({error})
})
     } 
     else if ((req.params.region==="null")&&(req.params.gouvernement!=="null")) {
       Club.find({ Gouvernement: req.params.gouvernement})
       .then((clubs)=>{
        const a=[];
        
       // console.log(clubs);
     clubs.map((c)=> {
        c.Activite.map((act)=>{a.push(act);
            })
            
    })
      const b=[...new Set(a)];
      res.status(200).json(b)
    })
    .catch((error)=>{
     return res.status(400).json({error})
    })
    
     }
     else {
     
      Club.find()
      .then((clubs)=>{
        const a=[];
        
       // console.log(clubs);
     clubs.map((c)=> {
        c.Activite.map((act)=>{a.push(act);
            })
            
    })
      const b=[...new Set(a)];
      res.status(200).json(b)
    })
    .catch((error)=>{
     return res.status(400).json({error})
    })
     }
}
const index=(req,res,next)=>{
    Club.find()

.then((clubs)=>{
  
  res.status(200).json(clubs)
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
  if ((req.params.region!=="null")&&(req.params.gouvernement!=="null"))
  {Club.find({$and: [{ Gouvernement: req.params.gouvernement},{Region: req.params.region },{ Activite:{ $all : [req.params['activite']] } }]})
  .then(club => res.status(200).json(club))
  .catch(error => res.status(404).json({ error }));
}
else if ((req.params.region==="null")&&(req.params.gouvernement!=="null")) {
  Club.find({$and:[{ Gouvernement: req.params.gouvernement},{ Activite:{ $all : [req.params['activite']] } }]})
 
  .then(club => res.status(200).json(club))
  .catch(error => res.status(404).json({ error }));
}
else{
  Club.find({ Activite:{ $all : [req.params['activite']] } })
  .then(club => res.status(200).json(club))
  .catch(error => res.status(404).json({ error }));
}

}
//Club par region
const findByRegion=(req, res, next)=>{
   
    Club.find({ Région: req.params.region })
      .then(club => res.status(200).json(club))
      .catch(error => res.status(404).json({ error }));
}
//Club par gouvernement
const findByGouv=(req, res, next)=>{
   if ((req.params.region!=="null"))
   {Club.find({$and: [{ Gouvernement: req.params.gouvernement},{Region: req.params.region }]})
      .then(club => res.status(200).json(club))
      .catch(error => res.status(404).json({ error }));} 
      else {
        Club.find({$or: [{ Gouvernement: req.params.gouvernement}]})
      .then(club => res.status(200).json(club))
      .catch(error => res.status(404).json({ error }));
      }
}



//Ajout du club
const store=(req,res,next)=>{
    let cl=new Club();
    {if(req.file && req.file.originalname)
        {cl=new Club({...req.body,Logo:req.file.filename,Temps:JSON.parse(req.body.Temps)}, { strict: false });
       }
        else{cl=new Club({...req.body,Temps:JSON.parse(req.body.Temps)}, { strict: false });
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
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown :"+req.params.id);
    
    if((req.file && req.file.originalname))
    {const updatedClub={
        Nom_club:req.body.Nom_club,
        Num_tel:req.body.Num_tel,
        Activite:req.body.Activite,
        Emplacement:req.body.Emplacement,
        Horaire:req.body.Horaire,
        Nom_entren:req.body.Nom_entren,
        Logo:req.file.filename,
        Temps:JSON.parse(req.body.Temps),
        Region:req.body.Region,
         gouvernement:req.body.Gouvernement,
    };
    Club.findByIdAndUpdate(
        req.params.id,
        {$set:updatedClub},
        {new:true}
    ) .then((club)=>{
        return res.status(203).json({updatedClub})
 
 
    })
    .catch((error)=>{
     return res.status(400).json({error})
    })
}
else{
  {const updatedClub={
    Nom_club:req.body.Nom_club,
    Num_tel:req.body.Num_tel,
    Activite:req.body.Activite,
    Emplacement:req.body.Emplacement,
    Horaire:req.body.Horaire,
    Nom_entren:req.body.Nom_entren,
    Temps:JSON.parse(req.body.Temps),
    Region:req.body.Region,
     gouvernement:req.body.Gouvernement,
};
Club.findByIdAndUpdate(
    req.params.id,
    {$set:updatedClub},
    {new:true}
) .then((club)=>{
    return res.status(203).json({updatedClub})


})
.catch((error)=>{
 return res.status(400).json({error})
})
}
}}


//delete club by id
const destroy=(req, res, next)=>{
    Club.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Club deleted successfully !'}))
    .catch(error => res.status(400).json({ error }));
}


module.exports={
    index,show,store,update,destroy,findByAct,findByGouv,findByRegion,indexactivty
}