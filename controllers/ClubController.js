const Club=require('../models/Club');
const Temps = require('../models/Temps');


//Liste des clubs
const index=(req,res,next)=>{
    Club.find()

.then((clubs)=>{
    return res.status(203).json({clubs})
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


//Show time by ID
const showTime=(req, res, next)=>{
    Temps.findOne({ _id: req.params.id })
    .then(temps => res.status(200).json(temps))
    .catch(error => res.status(404).json({ error }));
    
}
//Club par activité
const showClubByAct=(req, res, next)=>{
  
}


//Ajout du club
const store=(req, res, next)=>{

    delete req.body._id;
   const club=new Club({
       Nom_club:req.body.Nom_club,
       Activité:req.body.Activité,
       Temps:req.body.Temps,
       Gouvernement:req.body.Gouvernement,
       Région:req.body.Région,
       Emplacement:req.body.Emplacement

    })
    club.save()
    .then(() => res.status(201).json({ message: 'Club saved !'}))
    .catch(error => res.status(400).json({ error }));
    
}


//Find by id et mettre à jour des clubs
const update=(req, res, next)=>{
  
        Club.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Club updated successfully !'}))
          .catch(error => res.status(400).json({ error }));
      
}

//delete club by id
const destroy=(req, res, next)=>{
    Club.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Club deleted successfully !'}))
    .catch(error => res.status(400).json({ error }));
}


module.exports={
    index,show,showTime,store,update,destroy
}