const express=require('express')
const router=express.Router()
const ClubController=require('../controllers/ClubController')

router.get('/',ClubController.index)
router.post('/show',ClubController.show)
router.post('/store',ClubController.store)
router.post('/update',ClubController.update)
router.post('/delete',ClubController.destroy)




module.exports =router