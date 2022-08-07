const express=require('express')
const router=express.Router()
const ClubController=require('../controllers/ClubController')

router.get('/',ClubController.index)
router.post('/show/:id',ClubController.show)
router.post('/showtime/:id',ClubController.show)
router.post('/store',ClubController.store)
router.post('/update/:id',ClubController.update)
router.post('/delete/:id',ClubController.destroy)




module.exports =router