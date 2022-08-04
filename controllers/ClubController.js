const Club=require('../models/Club');


//Liste des clubs
const index=(req, res, next)=>{
    Club.find()
    .then(response=>{
        res.json({
            response
        })
    }).catch(error=>{
        res.json({
            message:'An error occured!'
        })
    })
}
//Show club by ID
const show=(req, res, next)=>{
    let clubID=req.body.clubID
    Club.findById(clubID)
    .then(response=>{
        res.json({
            response
        })
    }).catch(error=>{
        res.json({
            message:'An error occured!'
        })
    })
}
//Ajout du club
const store=(req, res, next)=>{
    let club=new Club({
        Nom_club:req.body.Nom_club,
        Activite:req.body.Activite,
        Nom_entren:req.body.Nom_entren,
        Region:req.body.Region,
        Gouvernement:req.body.Gouvernement,
        Num_tel:req.body.Num_tel,
        Logo:req.body.Logo,
        Emplacement:req.body.Emplacement

    })
    club.save()
    .then(response=>{
        res.json({
            message:'Club added successfully!'
        })
    }).catch(error=>{
            res.json({
                message:'An error occured!'
            })
        })
    
}

//màj des clubs

const update=(req, res, next)=>{
    let clubID=req.body.clubID
    let updatedClub={
        Nom_club:req.body.Nom_club,
        Activite:req.body.Activite,
        Nom_entren:req.body.Nom_entren,
        Region:req.body.Region,
        Gouvernement:req.body.Gouvernement,
        Num_tel:req.body.Num_tel,
        Logo:req.body.Logo,
        Emplacement:req.body.Emplacement

    }
   Club.findByIdAndUpdate(clubID,{$set:updatedClub})
.then(()=>{
    res.json({
        message:'Club updated successfully!'
    })
})
.catch(error=>{
    res.json({
        message:'An error Occured!'
    })
})

}

//delete club
const destroy=(req, res, next)=>{
    let clubID=req.body.clubID
    Club.findByIdAndRemove(clubID)
    .then(()=>{
        req.json({
            message:'Club added successfully!'
        })
    })
    .catch(error=>{
        req.json({
            message:'An error Occured!'
        })
    })
}
module.exports={
    index,show,store,update,destroy
}