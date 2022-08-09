const express=require('express')
const router=express.Router()
const ClubController=require('../controllers/ClubController')
const multer=require('../middleware/multer-config')
router.get('/',ClubController.index)
router.get('/show/:id',ClubController.show)
router.get('/showtime/:id',ClubController.show)
router.post('/store',ClubController.store)
router.put('/update/:id',ClubController.update)
router.delete('/delete/:id',ClubController.destroy)
router.get('/find/:activite',ClubController.findByAct)
router.get('/find/:region',ClubController.findByRegion)
router.get('/find/:gouvernement',ClubController.findByGouv)


module.exports =router