const Events=require('../models/events');
const storage=require('../middleware/multer-config')
const fs=require('fs')
const multer=require('multer')
const path=require('path');
const { extname } = require('path');
const { eventNames } = require('../models/events');
var ObjectId = require('mongodb').ObjectId;
var events=[];

const index=(req,res,next)=>{
    Events.find()

.then((e)=>{
  
  res.status(200).json(e)
})
.catch((error)=>{
 return res.status(400).json({error})
})
}
const show=(req, res, next)=>{
   
    Events.findOne({ _id: req.params.id })
      .then(e => res.status(200).json(e))
      .catch(error => res.status(404).json({ error }));
}
const store=(req,res,next)=>{
    let e=new Events();
    {if(req.file && req.file.originalname)
        {e=new Club({...req.body,image:req.file.filename}, { strict: false });
       }
        else{e=new Club({...req.body}, { strict: false });
        }}
    e.save()
     
    .then((e)=>{
        return res.status(203).json({e})
 
 
    })
    .catch((error)=>{
     return res.status(400).json({error})
    })
 }

//Find by id et mettre à jour des clubs
const update=(req, res, next)=>{
  if((req.file && req.file.originalname))
        Events.updateOne({ _id: req.params.id }, { ...req.body,image:req.file.filename, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Event updated with image successfully !'}))
          .catch(error => res.status(400).json({ error }));
    else{
       Events.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Event updated without image successfully !'}))
        .catch(error => res.status(400).json({ error }));
    }
}

//delete club by id
const destroy=(req, res, next)=>{
    Events.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Event deleted successfully !'}))
    .catch(error => res.status(400).json({ error }));
}
module.exports={
    index,show,store,update
}