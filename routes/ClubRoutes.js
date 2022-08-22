const express=require('express')
const router=express.Router()
const ClubController=require('../controllers/ClubController')
const multer = require('multer');
const images = multer({dest: '../images/'})
const path=require('path');
const Storage = multer.diskStorage({
  destination: "images",
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    callback(null,Date.now()+'_'+name);
  }
});
const upload=multer({storage:Storage}).single('Logo')

router.get('/',ClubController.index)
router.get('/show/:id',ClubController.show)
router.get('/activity',ClubController.indexactivty)
router.post('/store',upload,ClubController.store)
router.put('/update/:id',upload,ClubController.update)
router.delete('/delete/:id',ClubController.destroy)
router.get('/find/:activite',ClubController.findByAct)
router.get('/findregion/:region',ClubController.findByRegion)
router.get('/findgouvernement/:gouvernement',ClubController.findByGouv)



module.exports =router